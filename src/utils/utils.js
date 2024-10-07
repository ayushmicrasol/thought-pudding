import axios from "./axios";
import { STORAGE_KEY } from "./constant";

/* -------------------------------------------------------------------------- */
/*                            token decode function                           */
/* -------------------------------------------------------------------------- */
export function jwtDecode(token) {
  try {
    if (!token) return null;

    const parts = token.split(".");
    if (parts.length < 2) {
      throw new Error("Invalid token!");
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = JSON.parse(atob(base64));

    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    throw error;
  }
}

/* -------------------------------------------------------------------------- */
/*                            token expired timeout                           */
/* -------------------------------------------------------------------------- */
export function tokenExpired(exp) {
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;

  setTimeout(() => {
    try {
      alert("Token expired!");
      sessionStorage.removeItem(STORAGE_KEY);
      window.location.href = "/";
    } catch (error) {
      console.error("Error during token expiration:", error);
      throw error;
    }
  }, timeLeft);
}

/* -------------------------------------------------------------------------- */
/*                      set accessToken in sessionStorage                     */
/* -------------------------------------------------------------------------- */
export async function setSession(accessToken) {
  try {
    if (accessToken) {
      sessionStorage.setItem(STORAGE_KEY, accessToken);

      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      const decodedToken = jwtDecode(accessToken); // ~3 days by minimals server

      if (decodedToken && "exp" in decodedToken) {
        tokenExpired(decodedToken.exp);
      } else {
        throw new Error("Invalid access token!");
      }
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
      delete axios.defaults.headers.common.Authorization;
    }
  } catch (error) {
    console.error("Error during set session:", error);
    throw error;
  }
}

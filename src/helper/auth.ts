const Auth = {
  isAuthenticated: false,
  authenticate() {
    if (localStorage.getItem("authKeyTh")) {
      this.isAuthenticated = true;
    }
  },
  signout() {
    this.isAuthenticated = false;
    localStorage.removeItem("authKeyTh");
  },
  getAuth() {
    return this.isAuthenticated;
  },
  checkAuth() {
    this.authenticate();
    return this.isAuthenticated;
  },
};

export default Auth;

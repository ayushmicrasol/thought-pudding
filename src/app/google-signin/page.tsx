"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const GoogleSignIn = () => {
  const router = useRouter();
  const queryParams = new URLSearchParams(window.location.search);


  const error403 = true;

  const code = queryParams.get("code");

  const scope = queryParams.get("scope");
  const errorQ = queryParams.get("error");

  const redirectToHomePageWithOpenLoginPopup = () => {
    if (code && scope) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (errorQ == "access_denied") {
      router.push("/");
    }
  }, [errorQ, router]);

  useEffect(() => {
    redirectToHomePageWithOpenLoginPopup();
  }, [redirectToHomePageWithOpenLoginPopup]);

  if (error403) {
    return (
      <div className="mt-3">
        <div>
          <div className="text-center">
            <h6>Access Denied</h6>
            <div className="mt-4">
              {/* <img src={icon} height={"150px"} /> */}
            </div>
            <div className="mt-3">
              <span>
                Hi there! We&apos;re excited to have you onboard, fill up this
                form and we&apos;ll get back to you via email.
                <br />
                If you&apos;ve already filled the form, we&apos;ve sent you an
                email! <a href="https://bit.ly/thoughtpudding"> Form</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-item-center justify-content-center mt-5">
      {/* <Spinner /> */}
      {errorQ == "access_denied" ? (
        <h2 className="ms-2 text-center">Redirecting you to Login Page</h2>
      ) : (
        <h2 className="ms-2 text-center">Redirecting you to Dashboard</h2>
      )}
    </div>
  );
};

export default GoogleSignIn;
import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const WebsiteLayout = ({ children }) => {
  return (
    <div className="h-full">
      {/* header */}
      <Header />
      <div>
        {/* content */}
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;

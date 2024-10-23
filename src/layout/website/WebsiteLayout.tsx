import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const WebsiteLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-full bg-white">
      <Header />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;

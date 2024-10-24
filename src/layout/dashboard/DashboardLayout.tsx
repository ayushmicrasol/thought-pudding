import React, { Fragment } from "react";
import Header from "./Header";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Fragment>
      <div className="px-6 pt-3 pb-8 bg-[#F5F5F7] h-full ">
        <div className="dashboard_container">
          <Header />
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;

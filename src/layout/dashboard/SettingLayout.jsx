import React, { Fragment } from "react";
import Header from "./Header";
import SettingSidebar from "./SettingSidebar";

const SettingLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="px-6 pt-3 pb-8 bg-[#F5F5F7] h-screen ">
        <div className="dashboard_container h-full">
          {/* header */}
          <Header />

          {/* sidebar and content */}
          <div className="mt-5 flex bg-white h-[calc(100%_-_120px)] rounded-xl overflow-hidden">
            {/* sidebar  */}
            <div className="min-w-[255px] h-full">
              <SettingSidebar />
            </div>
            {/* content */}
            <div className="flex-1 p-5 overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SettingLayout;

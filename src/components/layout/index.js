import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

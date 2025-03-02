import React from "react";
import { Outlet } from "react-router";
import NavBar from "../component/nav var/navBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

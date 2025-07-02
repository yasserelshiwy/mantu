import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideMenu from "./SideMenu";

export default function Layout() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <div className="flex items-start justify-start  ">
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <div className="container mx-auto ">
        <Navbar
          setIsSideMenuOpen={setIsSideMenuOpen}
          isSideMenuOpen={isSideMenuOpen}
        />

        <Outlet />
      </div>
    </div>
  );
}

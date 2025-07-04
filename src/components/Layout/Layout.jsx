import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideMenu from "./SideMenu";
import Footer from "../Footer/Footer";

export default function Layout() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <div className="flex items-start justify-start  ">
      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <div className="container ">
        <Navbar
          setIsSideMenuOpen={setIsSideMenuOpen}
          isSideMenuOpen={isSideMenuOpen}
        />

        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

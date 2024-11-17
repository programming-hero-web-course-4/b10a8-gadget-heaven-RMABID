import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Toaster />
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-262px)] py-12">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;

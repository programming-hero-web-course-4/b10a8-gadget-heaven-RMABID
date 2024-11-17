import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mt-6 px-8 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="text-2xl">
            <h1 className="tex-4xl font-bold cursor-pointer">Gadget Heaven</h1>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:block">
        <ul className=" flex items-center gap-8 font-medium">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="btn border-2 border-gray-100 btn-ghost btn-circle">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <button className="btn border-2 border-gray-100 btn-ghost btn-circle">
          <div className="indicator">
            <i class="fa-regular fa-heart"></i>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-slate-800 text-white p-4 mb-11">
      <nav className="container ">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link to="#"> Dashboard </Link>
            <Link to="/"> Master Price </Link>
            <Link to="#"> Custom Price </Link>
            <Link to="#"> Calender </Link>
            <Link to="#"> Reports </Link>
          </div>
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </span>
            <img
              className="rounded-full w-10"
              src="https://qph.cf2.quoracdn.net/main-qimg-92ffcf1bbb2218d9e4ba00d6bdcfc423-lq"
              alt=""
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

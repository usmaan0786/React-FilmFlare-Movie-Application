import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

import { MdAccountCircle } from "react-icons/md";


import { Link } from "react-router-dom";
import Search from "../components/Search";
const Navbar = () => {

  const isAunthenticated = true;


  return (
    <div className=" bg-[#3586ff] py-3 px-2  flex items-center justify-between text-white w-[103rem]">
      <div>
      </div>
      <Search />
      <div className="mr-[1rem] flex items-center">
        <div>
          {isAunthenticated ? (
            <Link to={"/profile/:id"} className="flex items-center">
              <h1 className="font-medium text-[.8rem]">My movies</h1>
              <img
                className="text-[1.9rem] mr-[1rem] rounded-full w-[2rem] h-[2.5rem] mx-2"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="account logo"
              />
            </Link>
          ) : (
            <MdAccountCircle className="text-[1.9rem] mr-[1rem]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

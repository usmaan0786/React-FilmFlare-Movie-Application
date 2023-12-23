import React from "react";
import pic from "../Images/profilePic.png";

const Navbar = () => {
  return (
    <div className=" bg-[#3586ff] py-3 px-2  flex items-center justify-end text-white w-[103rem]">
      <div className="flex gap-x-2 items-center mr-[2rem]">
        <h1 className="font-medium text-[#48f9ff]">Usman Manzoor</h1>
        <img className="w-[2.5rem] rounded-full" src={pic} alt="profile pic" />
      </div>
    </div>
  );
};

export default Navbar;

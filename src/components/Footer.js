import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="text-white mt-[9rem] bg-[#3586ff] flex flex-col items-center mb-[2rem]">
        <div className=" text-[1rem] lg:text-[1.4rem] bg-[#ffffff] flex w-[80%] justify-between text-[#161616] p-[2.2rem] rounded-[.5rem] mt-[-4.2rem]">
          <div>
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
          </div>
          <button className="uppercase text-white px-4 bg-[#3586ff] hover:text-[#3586ff] duration-100 font-bold  hover:border-[#3586ff] border-2  hover:bg-[#ffffff] text-[1.2rem]">get started</button>
        </div>
        <div className="text-[1rem] font-bold flex flex-col lg:flex-row gap-x-[5rem] mt-[1rem]">
          <div className="flex flex-col gap-[1rem] p-[2rem]">
            <h2 className="font-bold text-[1.3rem]">By Usman Manzoor</h2>
            <p className="font-normal">lorem ipsum eiusmod laboris dolore consectetur.</p>
          </div>
          <div className="p-[2rem] flex flex-col gap-[1rem]">
            <p className="font-normal">Subscribe to get important updates</p>
            <input
              className="p-[.5rem] rounded-[.5rem] text-black"
              type="email"
              placeholder="Your Email"
              name="email"
              autoComplete="off"
            />
            <button className="text-white px-4 bg-[#3586ff] hover:text-[#3586ff]  hover:border-[#3586ff] border-2  hover:bg-[#ffffff] duration-100 p-2">Subsribe</button>
          </div>
          <div className="p-[2rem] flex flex-col gap-[1rem]">
            <p>Follow Us</p>
            <div className="flex gap-x-[1rem]">
              <BsYoutube className="text-[1.8rem] text-[#ff5b5b]" />
              <BsInstagram className="text-[1.8rem] text-[#fff23e] " />
              <BsGithub className="text-[1.8rem] text-[#000000]"  />
              <BsLinkedin className="text-[1.8rem] text-[#0e3377]" />
            </div>
          </div>
          <div className="p-[2rem] flex flex-col gap-[1rem]">
            {" "}
            <p>Call Us</p>
            <p>+92 336-9589172</p>
          </div>
        </div>
        <hr className=""></hr>
        <div className="flex text-[1rem] lg:gap-x-[20rem] items-center justify-center mt-[1rem]">
          <div className="flex w-[100%]">
             <p>© {new Date().getFullYear()} Usman Manzoor. All Rights Reserved{" "}</p>
          </div>
          <div className="flex gap-x-10 flex-wrap">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

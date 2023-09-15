import React from "react";
import lock from "../assets/lock.png";

const Footer = () => {
  return (
    <div className="flex md:justify-between flex-col items-center text-white bg-[#252F3D] p-8 gap-4 md:px-36 px-4 mt-14">
      <div className="text-sm flex flex-row items-center gap-2">
        <p>Copyright (c) 2023</p>
        <p>|</p>
        <p>Clarifionsupport@clarifion.com</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img src={lock} alt="" />
        <p className="text-sm">Secure 256-bit SSL encryption.</p>
      </div>
    </div>
  );
};

export default Footer;

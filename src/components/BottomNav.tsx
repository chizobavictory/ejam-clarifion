import React from "react";
import logo from "../assets/clarifonlogo.png";
import logo1 from "../assets/McAfee_Secure.png";
import logo2 from "../assets/norton-antivirus-logo 1.png";

const BottomNav = () => {
  return (
    <div className="hidden md:flex justify-between px-36 p-6">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex gap-6">
        <img src={logo1} alt="Logo" className="h-8"/>
        <img src={logo2} alt="Logo" className="h-8"/>
      </div>
    </div>
  );
};

export default BottomNav;

import React from "react";
import image from "../assets/mainimage.png";
const Main = () => {
  return (
    <div className="flex flex-row gap-4 p-4 mx-36 bg-[#FAFAFA] mt-8 rounded-sm">
      <div>
        <img src={image} alt="main" />
      </div>
      <div>
        <p><span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="text-[#2C7EF8]">$14 each </span>($84.00 total!)</p>
      </div>
    </div>
  );
};

export default Main;

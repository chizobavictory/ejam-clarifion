import React from "react";
import image from "../assets/mainimage.png";
import image2 from "../assets/mainimage2.png";
import image3 from "../assets/percentage.png";
import { Icon } from "@iconify/react";

const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 mx-36 bg-[#FAFAFA] mt-8 rounded-sm">
      <div>
        <img src={image} alt="main" />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl">
            <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only{" "}
            <span className="text-[#2C7EF8]">$14 Each </span>($84.00 Total!)
          </h1>
        </div>
        <div className="flex justify-between gap-6">
          <div className="">
            <img src={image2} alt="main2" className="" />
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-28 flex-row ">
              <div>
                <p className="text-xl ">Clarifion Air Ionizer</p>
              </div>
              <div className="flex-row flex items-center gap-2 text-xl">
                <p className="text-[#969696] text-base line-through">$180</p>
                <p className="text-[#2C7EF8]">$84</p>
              </div>
            </div>
            <div className="flex gap-0 text-[#FFC000]">
              <Icon icon="ant-design:star-filled" width="18" height="18" />
              <Icon icon="ant-design:star-filled" width="18" height="18" />
              <Icon icon="ant-design:star-filled" width="18" height="18" />
              <Icon icon="ant-design:star-filled" width="18" height="18" />
              <Icon icon="ant-design:star-filled" width="18" height="18" />
            </div>
            <div className="flex gap-4 items-center">
              <Icon icon="carbon:circle-filled" className="text-[#2C7EF8]" width="16" height="16" />
              <p className="text-sm text-[#37465A]">12 left in stock</p>
            </div>
            <div>
              <p className="text-sm text-[#4D5254]">
                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#4D5254] gap-2 flex-col flex">
          <div className="flex flex-row gap-2">
            <Icon icon="mdi:tick" width="30" height="30" className="text-[#2C7EF8]" />
            <p>
              Negative Ion Technology may <span className="text-bold">help with allergens</span>
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Icon icon="mdi:tick" width="30" height="30" className="text-[#2C7EF8]" />
            <p>
              Designed for <span className="text-bold">air rejuvenation</span>
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Icon icon="mdi:tick" width="30" height="30" className="text-[#2C7EF8]" />
            <p>
              <span className="text-bold">Project for every room</span> in all types of places
            </p>
          </div>
        </div>
        <div className="bg-[#EDF3FD] p-2 rounded-md flex flex-row gap-4 items-center">
          <img src={image3} alt="" />
          <p className="text-base">
            Save <span className="text-[#2C7EF8]">53%</span> and get <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only{" "}
            <span className="text-[#2C7EF8]">$14 Each</span>.
          </p>
        </div>
        <div className="bg-[#59AE43] text-white flex flex-row gap-4 p-4 items-center justify-center rounded-full w-full">
          <p>YES CLAIM MY DISCOUNT</p> <Icon icon="akar-icons:arrow-right" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default Main;

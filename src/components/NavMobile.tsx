import { Icon } from "@iconify/react";
import React from "react";

const MobileNav = () => {
  return (
    <div className="bg-[#252F3D] w-screen md:hidden h-[42px] p-2 text-xs flex px-4 items-center justify-center text-white">
      <div className="flex gap-2 flex-row text-[12px] items-center">
        <Icon icon="ion:chevron-back" />
        <Icon icon="fluent:checkmark-starburst-20-regular" width="22" height="22" />
        <p className="text-[12px]">30-DAY SATISFACTION GUARANTEE</p>
        <Icon icon="ion:chevron-forward" />
      </div>
    </div>
  );
};

export default MobileNav;

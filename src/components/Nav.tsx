import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div className="bg-[#252F3D] md:flex h-50 p-3 text-xs hidden justify-between text-white px-36">
      <div className="flex gap-2 flex-row items-center">
        <Icon icon="fluent:checkmark-starburst-20-regular" width="22" height="22" />
        <p>30-DAY SATISFACTION GUARANTEE</p>
      </div>
      <div className="flex gap-2 flex-row items-center">
        <Icon icon="ph:truck-light" width="22" height="22" />
        <p>FREE DELIVERY ON ORDERS ABOVE $40.00</p>
      </div>

      <div className="flex gap-2 flex-row items-center">
        <Icon icon="mdi:cards-heart-outline" width="22" height="22" />
        <p>50.000+ HAPPY CUSTOMERS</p>
      </div>

      <div className="flex gap-2 flex-row items-center">
        <Icon icon="fluent:arrow-sync-checkmark-20-regular" width="22" height="22" />
        <p>100% MONEY BACK GUARANTEE</p>
      </div>
    </div>
  );
};

export default Nav;

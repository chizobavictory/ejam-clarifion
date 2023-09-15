import React from "react";
import greentick from "../assets/greentick.png";
import bluetick from "../assets/bluetick.png";
import bluefour from "../assets/bluefour.png";

const CheckMobile = () => {
  return (
    <div className="px-4 flex md:hidden justify-between mt-4 text-xs">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={greentick} alt="check" className="w-8 h-8" />
        <p>Cart Review</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={greentick} alt="check" className="w-8 h-8" />
        <p>Checkout</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={bluetick} alt="check" className="w-8 h-8" />
        <p className="font-bold">Special Offer</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={bluefour} alt="check" className="w-8 h-8" />
        <p>Confirmation</p>
      </div>
    </div>
  );
};

export default CheckMobile;

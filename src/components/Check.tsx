import React from "react";
import greentick from "../assets/greentick.png";
import bluetick from "../assets/bluetick.png"
import bluefour from "../assets/bluefour.png"

const Check = () => {
  return (
    <div className="px-36 md:flex hidden justify-between  mt-10 text-xl">
      <div className="flex items-center gap-2">
        <img src={greentick} alt="check" />
        <p>Step 1: Cart Review</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={greentick} alt="check" />
        <p>Step 2: Checkout</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={bluetick} alt="check" />
        <p className="font-bold">Step 3: Special Offer</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={bluefour} alt="check" />
        <p>Step 4: Confirmation</p>
      </div>
    </div>
  );
};

export default Check;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const VoucherDropdownComponent = () => {
  const voucherTypes = [
    "TH - MM",
    "MM - TH",
    "MM - SG",
    "Air Cargo",
    "Car Rental",
  ];
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div id="dropdown" className="relative flex w-full justify-center mt-12">
        <button
          onClick={toggle}
          className=" border-2 font-semibold px-4 py-2 rounded-lg flex gap-3 items-center"
        >
          <p>Select Voucher</p>
          <ChevronDown
            className={` transition-all duration-500 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <ul
          className={`bg-white/80 text-sm w-1/3 font-bold p-3 rounded-lg shadow-md absolute top-12 left-50  transition-all duration-300 origin-top z-10 overflow-hidden border backdrop-blur-sm ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {voucherTypes.map((voucher, index) => (
            <li
              key={index}
              onClick={toggle}
              className="cursor-pointer hover:bg-gray-100 p-3  rounded-lg active:bg-gray-200"
            >
              <a href="#">{voucher} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VoucherDropdownComponent;

import React from "react";
import DatepickerComponent from "../datepicker/Datepicker.component";

const InvoiceHeaderComponent = () => {
  return (
    <>
      <p className="lg:text-7xl text-6xl font-bold text-center text-red-600">
        JK
      </p>

      <div className="lg:mt-10 lg:mb-5 my-5 flex  justify-between items-start ">
        <ul
          id="customerInfo"
          className="text-sm font-semibold w-1/2 flex gap-1 flex-col "
        >
          <li className="flex gap-8 items-center ">
            <label htmlFor="customerName">Name</label>
            <input
              placeholder="customer name"
              type="text"
              name="customerName"
              id="customerName"
              className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm"
            />
          </li>
          <li className="flex gap-8 items-center ">
            <label htmlFor="customerPhone">Phone</label>
            <input
              placeholder="phone"
              type="text"
              name="customerPhone"
              id="customerPhone"
              className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm"
            />
          </li>
          <li className="flex gap-5 items-center ">
            <label htmlFor="customerPhone">Address</label>
            <input
              placeholder="address"
              type="text"
              name="customerAddress"
              id="customerAddress"
              className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm"
            />
          </li>
        </ul>

        {/* date */}
        <div className="flex w-[200px] gap-4 items-center">
          <p className="text-sm font-semibold">Date</p>
          <DatepickerComponent />
        </div>
      </div>
    </>
  );
};

export default InvoiceHeaderComponent;

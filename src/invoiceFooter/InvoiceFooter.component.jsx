import React from "react";

const InvoiceFooterComponent = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-start mt-3 gap-3">
        <label htmlFor="note">Note :</label>
        <textarea
          placeholder="(Add note / Sign)"
          name="note"
          id="note"
          cols="30"
          rows="3"
          className="border-none outline-none resize-none p-0 focus:ring-red-600 rounded-lg"
        ></textarea>
      </div>
      <div className="w-1/3 footer">
        <span className="flex w-full items-center ">
          <p className="font-bold w-1/2 uppercase text-sm p-2   text-center ">
            total
          </p>
          <p className="font-bold w-1/2 uppercase text-sm p-2   text-center">
            10000000
          </p>
        </span>
        <span className="flex w-full items-center ">
          <p className="font-bold w-1/2 uppercase text-sm p-2   text-center ">
            adnavced
          </p>
          <p className="font-bold w-1/2 uppercase text-sm p-2   text-center">
            1000
          </p>
        </span>
        <span className="flex w-full items-cente ">
          <p className="font-bold w-1/2 uppercase text-sm p-2   text-center ">
            balance
          </p>
          <p className="font-bold w-1/2 uppercase text-sm p-2   text-center">
            1000
          </p>
        </span>
      </div>
    </div>
  );
};

export default InvoiceFooterComponent;

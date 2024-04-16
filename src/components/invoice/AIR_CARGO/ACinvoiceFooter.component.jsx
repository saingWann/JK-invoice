import React from "react";

const ACinvoiceFooterComponent = () => {
  return (
    <div id="invoiceFooter" className="flex max-sm:flex-col justify-between">
      <div className="flex items-start mt-3 gap-3">
        <label htmlFor="note" className="font-bold">
          Note :
        </label>
        <textarea
          placeholder="(Add note / Sign)"
          name="note"
          id="note"
          cols="30"
          rows="3"
          className="border-none outline-none resize-none p-0 focus:ring-red-600 rounded-lg text-sm"
        ></textarea>
      </div>
      <div className="lg:w-1/3 md:w-1/2  footer mt-1">
        <span className="flex w-full items-center border-b ">
          <p className="font-bold w-1/2 uppercase text-sm   text-center ">
            total
          </p>
          <input
            readOnly
            id="total"
            name="total"
            type="text"
            placeholder="total amount"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-1/2 text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center  font-bold"
          ></input>
        </span>
        <span className="flex w-full items-center border-b ">
          <p className="font-bold w-1/2 uppercase text-sm   text-center ">
            advanced
          </p>
          <input
            id="advanced"
            name="advanced"
            type="text"
            placeholder="advanced amount"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-1/2 text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center  font-bold"
          ></input>
        </span>
        <span className="flex w-full items-center border-b ">
          <p className="font-bold w-1/2 uppercase text-sm   text-center ">
            balance
          </p>
          <input
            readOnly
            id="balance"
            name="balance"
            type="text"
            placeholder="balance"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-1/2 text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center  font-bold"
          ></input>
        </span>
      </div>
    </div>
  );
};

export default ACinvoiceFooterComponent;

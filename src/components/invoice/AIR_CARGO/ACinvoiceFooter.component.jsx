import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AC_calculateGrandBalance,
  AC_handleUnitOnBlur,
  AC_updateData,
} from "../../../state/ac-calculateAmount/ac_calculateAmount";

const ACinvoiceFooterComponent = () => {
  const { AC_grandTotal, AC_advanced, AC_grandBalance } = useSelector(
    (state) => state.ac_cost
  );
  const dispatch = useDispatch();
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
          className="border-none outline-none resize-none p-0 focus:ring-red-600 rounded-lg text-sm h-full"
        ></textarea>
      </div>
      <div className="lg:w-1/3 md:w-1/2  footer mt-1">
        <span className="flex w-full items-center border-b ">
          <p className="font-bold w-1/2 uppercase text-sm   text-center ">
            total
          </p>
          <input
            value={AC_grandTotal}
            disabled={true}
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
            value={AC_advanced}
            onChange={(e) =>
              dispatch(
                AC_updateData({ type: "advanced", value: e.target.value })
              )
            }
            onBlur={() => {
              dispatch(AC_handleUnitOnBlur("advanced"));
              dispatch(AC_calculateGrandBalance());
            }}
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
            value={AC_grandBalance}
            disabled={true}
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

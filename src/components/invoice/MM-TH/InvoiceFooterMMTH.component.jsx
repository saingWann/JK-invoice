import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addUnitOnblur,
  handleGrandBalance,
  updateData,
} from "../../../state/mm-th-calculateAmount/mm-th-calculate-amount-slice";

const InvoiceFooterMMTHComponent = () => {
  const { MM_TH_grandTotal, MM_TH_advanced, MM_TH_grandBalance } = useSelector(
    (state) => state.mm_th_cost
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
            value={MM_TH_grandTotal}
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
            value={MM_TH_advanced}
            onChange={(e) => {
              dispatch(updateData({ type: "advanced", value: e.target.value }));
            }}
            onBlur={() => {
              dispatch(addUnitOnblur("advanced"));
              dispatch(handleGrandBalance());
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
            readOnly
            value={MM_TH_grandBalance}
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

export default InvoiceFooterMMTHComponent;

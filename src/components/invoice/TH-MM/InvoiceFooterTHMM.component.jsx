import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addUnitOnblur,
  handleGrandBalance,
  updateData,
} from "../../../state/mm-th-calculateAmount/mm-th-calculate-amount-slice";
import { calculateGrandBalance } from "../../../state/calculateAmountSlice";

const InvoiceFooterTHMMComponent = () => {
  const { grandTotal, advanced, balance } = useSelector((state) => state.cost);

  const dispatch = useDispatch();

  return (
    <div id="invoiceFooter" className="flex justify-between max-sm:flex-col">
      <div className="mt-3 flex items-start gap-3">
        <label htmlFor="note" className="font-bold">
          Note :
        </label>
        <textarea
          placeholder="(Add note / Sign)"
          name="note"
          id="note"
          cols="30"
          rows="3"
          className="h-full resize-none rounded-lg border-none p-0 text-sm outline-none focus:ring-red-600"
        ></textarea>
      </div>
      <div className="footer mt-1 md:w-1/2 lg:w-1/3">
        <span className="flex w-full items-center border-b">
          <p className="w-1/2 text-center text-sm font-bold uppercase">total</p>
          <input
            value={grandTotal}
            readOnly
            id="total"
            name="total"
            type="text"
            placeholder="total amount"
            className="w-1/2 rounded-lg border-none bg-transparent text-center text-sm font-bold placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          ></input>
        </span>
        <span className="flex w-full items-center border-b">
          <p className="w-1/2 text-center text-sm font-bold uppercase">
            advanced
          </p>
          <input
            value={advanced}
            onChange={(e) => {
              dispatch(updateData({ type: "advanced", value: e.target.value }));
            }}
            onBlur={() => {
              dispatch(addUnitOnblur("advanced"));
              dispatch(calculateGrandBalance());
            }}
            id="advanced"
            name="advanced"
            type="text"
            placeholder="advanced amount"
            className="w-1/2 rounded-lg border-none bg-transparent text-center text-sm font-bold placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          ></input>
        </span>
        <span className="flex w-full items-center border-b">
          <p className="w-1/2 text-center text-sm font-bold uppercase">
            balance
          </p>
          <input
            readOnly
            value={balance}
            id="balance"
            name="balance"
            type="text"
            placeholder="balance"
            className="w-1/2 rounded-lg border-none bg-transparent text-center text-sm font-bold placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          ></input>
        </span>
      </div>
    </div>
  );
};

export default InvoiceFooterTHMMComponent;

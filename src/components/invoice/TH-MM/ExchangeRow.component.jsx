import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  calculateGrandBalance,
  calcuteTotalMMK,
  handleUnit,
  setCost,
} from "../../../state/calculateAmountSlice";

const ExchangeRowComponent = ({ rowId, rowNo, placeholder }) => {
  const { THB, exchangeRateMMK } = useSelector((state) => state.cost);
  const dispatch = useDispatch();
  return (
    <>
      <tr
        id="tr"
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 active:bg-gray-100"
      >
        <td scope="row" className=" py-4 font-medium text-black  ">
          <input
            id={`number_${rowId}`}
            name={`number_${rowId}`}
            placeholder={`no`}
            disabled={true}
            type="text"
            value={rowNo}
            readOnly
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
          />
        </td>
        <td scope="row" className=" py-4 font-medium text-black  ">
          <input
            id={`descripiton_${rowId}`}
            name={`descripiton_${rowId}`}
            placeholder={`descripiton`}
            disabled={true}
            type="text"
            value={placeholder}
            readOnly
            className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
          />
        </td>
        <td className=" py-4 font-medium text-black  ">
          <input
            value={THB}
            readOnly
            disabled={true}
            id={`unit_${rowId}`}
            name={`unit_${rowId}`}
            placeholder="unit"
            type="text"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
          />
        </td>
        <td scope="row" className=" py-4 font-medium text-black  ">
          <input
            value={exchangeRateMMK}
            onChange={(e) => {
              dispatch(
                setCost({ type: "exchangeRateMMK", value: e.target.value })
              );
            }}
            onBlur={() => {
              dispatch(handleUnit("exchangeRateMMK"));
              dispatch(calcuteTotalMMK());
            }}
            id={`unit_price_${rowId}`}
            name={`unit_price_${rowId}`}
            placeholder="unit price"
            type="text"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
          text-center"
          />
        </td>
        <td
          scope="row"
          className=" py-4 font-medium text-black relative overflow-y-hidden"
        >
          <input
            id={`amount_${rowId}`}
            name={`amount_${rowId}`}
            disabled={true}
            type="text"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
              text-center"
          />
        </td>
      </tr>
    </>
  );
};

export default ExchangeRowComponent;

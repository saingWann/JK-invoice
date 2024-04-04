import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TotalAmountComponent = ({ rowId, rowNo, placeholder }) => {
  const { THB, exchangeRateMMK, totalAmountInMMK, totalAmountInTHB } =
    useSelector((state) => state.cost);
  const dispatch = useDispatch();
  return (
    <>
      {/* totoal amount in mmk */}
      <tr
        id="tr"
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 active:bg-gray-100"
      >
        <td scope="row" className=" py-4 font-medium text-black  ">
          <input
            placeholder={`no`}
            type="text"
            disabled={true}
            value={3}
            readOnly
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
          />
        </td>
        <td scope="row" className=" py-4 font-medium text-black  ">
          <input
            placeholder={`descripiton`}
            type="text"
            disabled={true}
            value="total amount in mmk"
            readOnly
            className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
          />
        </td>
        <td className=" py-4 font-medium text-black  ">
          <input
            value={totalAmountInTHB}
            disabled={true}
            readOnly
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
            disabled={true}
            readOnly
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
            value={totalAmountInMMK}
            id={`amount_${rowId}`}
            name={`amount_${rowId}`}
            disabled={true}
            placeholder="amount"
            readOnly
            type="text"
            className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
              text-center"
          />
        </td>
      </tr>
    </>
  );
};

export default TotalAmountComponent;

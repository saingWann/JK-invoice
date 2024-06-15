import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const TotalAmountMMK = ({ rowId }) => {
  const { MM_TH_totalKgPrice, MM_TH_exchangeRate, MM_TH_totalInMMK } =
    useSelector((state) => state.mm_th_cost);
  //   const dispatch = useDispatch();
  return (
    <>
      <tr
        id="tr"
        className="border-b bg-white hover:bg-gray-50 active:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
      >
        <td scope="row" className="py-4 font-medium text-black">
          <input
            placeholder={`no`}
            type="text"
            disabled={true}
            value={3}
            readOnly
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td scope="row" className="py-4 font-medium text-black">
          <input
            placeholder={`descripiton`}
            type="text"
            disabled={true}
            value="total amount in mmk"
            readOnly
            className="w-full rounded-lg border-none bg-transparent text-center text-sm uppercase placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td className="py-4 font-medium text-black">
          <input
            disabled={true}
            readOnly
            value={MM_TH_totalKgPrice}
            id={`unit_${rowId}`}
            name={`unit_${rowId}`}
            placeholder="unit"
            type="text"
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td scope="row" className="py-4 font-medium text-black">
          <input
            disabled={true}
            value={MM_TH_exchangeRate}
            readOnly
            id={`unit_price_${rowId}`}
            name={`unit_price_${rowId}`}
            placeholder="unit price"
            type="text"
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td
          scope="row"
          className="relative overflow-y-hidden py-4 font-medium text-black"
        >
          <input
            value={MM_TH_totalInMMK}
            id={`amount_${rowId}`}
            name={`amount_${rowId}`}
            disabled={true}
            placeholder="amount"
            readOnly
            type="text"
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
      </tr>
    </>
  );
};

export default TotalAmountMMK;

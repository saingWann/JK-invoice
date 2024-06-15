import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUnitOnblur,
  calculateTotalMMK,
  updateData,
} from "../../../state/mm-th-calculateAmount/mm-th-calculate-amount-slice";

const ExchangeRow = ({ rowId, rowNo, placeholder }) => {
  const { MM_TH_exchangeRate } = useSelector((state) => state.mm_th_cost);
  const dispatch = useDispatch();
  return (
    <>
      <tr
        id="tr"
        className="border-b bg-white hover:bg-gray-50 active:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
      >
        <td scope="row" className="py-4 font-medium text-black">
          <input
            id={`number_${rowId}`}
            name={`number_${rowId}`}
            placeholder={`no`}
            disabled={true}
            type="text"
            value={rowNo}
            readOnly
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td scope="row" className="py-4 font-medium text-black">
          <input
            id={`descripiton_${rowId}`}
            name={`descripiton_${rowId}`}
            placeholder={`descripiton`}
            disabled={true}
            type="text"
            value={placeholder}
            readOnly
            className="w-full rounded-lg border-none bg-transparent text-center text-sm uppercase placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td className="py-4 font-medium text-black">
          <input
            readOnly
            value="1 THB"
            disabled={true}
            id={`unit_${rowId}`}
            name={`unit_${rowId}`}
            placeholder="unit"
            type="text"
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
        <td scope="row" className="py-4 font-medium text-black">
          <input
            value={MM_TH_exchangeRate}
            onChange={(e) =>
              dispatch(
                updateData({ type: "exchangeRate", value: e.target.value }),
              )
            }
            onBlur={() => {
              dispatch(addUnitOnblur("exchangeRate"));
              dispatch(calculateTotalMMK());
            }}
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
            id={`amount_${rowId}`}
            name={`amount_${rowId}`}
            disabled={true}
            type="text"
            className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
          />
        </td>
      </tr>
    </>
  );
};

export default ExchangeRow;

import React from "react";
import {
  AC_calculateTotalAmountInMMK,
  AC_handleUnitOnBlur,
  AC_updateData,
} from "../../../state/ac-calculateAmount/ac_calculateAmount";
import { useDispatch, useSelector } from "react-redux";

const ACexchangeRateComponent = ({ rowId, rowNo, placeholder }) => {
  const { AC_exchangeRate } = useSelector((state) => state.ac_cost);
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
            readOnly
            value="1 THB"
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
            value={AC_exchangeRate}
            onChange={(e) =>
              dispatch(
                AC_updateData({ type: "exchangeRate", value: e.target.value })
              )
            }
            onBlur={() => {
              dispatch(AC_handleUnitOnBlur("exchangeRate"));
              dispatch(AC_calculateTotalAmountInMMK());
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

export default ACexchangeRateComponent;

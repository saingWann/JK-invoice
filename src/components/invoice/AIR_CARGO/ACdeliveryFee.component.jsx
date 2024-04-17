import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AC_handleUnitOnBlur,
  AC_updateData,
} from "../../../state/ac-calculateAmount/ac_calculateAmount";

const ACdeliveryFeeComponent = ({ rowId, rowNo, placeholder }) => {
  const { AC_deliFee } = useSelector((state) => state.ac_cost);
  const dispatch = useDispatch();
  return (
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
          disabled={true}
          id={`unit_${rowId}`}
          name={`unit_${rowId}`}
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          disabled={true}
          id={`unit_price_${rowId}`}
          name={`unit_price_${rowId}`}
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
          value={AC_deliFee}
          onChange={(e) => {
            dispatch(AC_updateData({ type: "deliFee", value: e.target.value }));
          }}
          onBlur={() => {
            dispatch(AC_handleUnitOnBlur("deliFee"));
            dispatch(AC_handleUnitOnBlur("allTHB"));
          }}
          id={`amount_${rowId}`}
          name={`amount_${rowId}`}
          placeholder="amount"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
          text-center"
        />
      </td>
    </tr>
  );
};

export default ACdeliveryFeeComponent;

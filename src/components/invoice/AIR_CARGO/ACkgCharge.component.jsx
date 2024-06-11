import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  AC_handlePricePerWeight,
  AC_handleUnitOnBlur,
  AC_updateData,
} from "../../../state/ac-calculateAmount/ac_calculateAmount";

const ACkgChargeComponent = ({ placeholder, rowId, rowNo }) => {
  const { AC_weight, AC_pricePerWeight, AC_totalAmountOfWeight_THB } =
    useSelector((state) => state.ac_cost);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("Kg Charge");
  const [pickOrDeli, setPickOrDeli] = useState("deli fee");
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
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td className=" py-4 font-medium text-black  ">
        <input
          value={AC_weight}
          onChange={(e) =>
            dispatch(AC_updateData({ type: "weight", value: e.target.value }))
          }
          onBlur={() => {
            dispatch(AC_handleUnitOnBlur("weight"));
            dispatch(AC_handlePricePerWeight());
          }}
          id={`unit_${rowId}`}
          name={`unit_${rowId}`}
          placeholder="unit"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          value={AC_pricePerWeight}
          id={`unit_price_${rowId}`}
          name={`unit_price_${rowId}`}
          placeholder="unit price"
          onChange={(e) => {
            dispatch(
              AC_updateData({ type: "pricePerWeight", value: e.target.value })
            );
          }}
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
          value={AC_totalAmountOfWeight_THB}
          id={`amount_${rowId}`}
          name={`amount_${rowId}`}
          onChange={(e) => {
            dispatch(
              AC_updateData({ type: "totalTHB", value: e.target.value })
            );
          }}
          placeholder="amount"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
              text-center"
        />
      </td>
    </tr>
  );
};

export default ACkgChargeComponent;

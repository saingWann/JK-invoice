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

  return (
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
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-full rounded-lg border-none bg-transparent text-center text-sm uppercase placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
        />
      </td>
      <td className="py-4 font-medium text-black">
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
          className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
        />
      </td>
      <td scope="row" className="py-4 font-medium text-black">
        <input
          value={AC_pricePerWeight}
          id={`unit_price_${rowId}`}
          name={`unit_price_${rowId}`}
          placeholder="unit price"
          onChange={(e) => {
            dispatch(
              AC_updateData({ type: "pricePerWeight", value: e.target.value }),
            );
          }}
          type="text"
          className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
        />
      </td>
      <td
        scope="row"
        className="relative overflow-y-hidden py-4 font-medium text-black"
      >
        <input
          value={AC_totalAmountOfWeight_THB}
          id={`amount_${rowId}`}
          name={`amount_${rowId}`}
          onChange={(e) => {
            dispatch(
              AC_updateData({ type: "totalTHB", value: e.target.value }),
            );
          }}
          placeholder="amount"
          type="text"
          className="w-full rounded-lg border-none bg-transparent text-center text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
        />
      </td>
    </tr>
  );
};

export default ACkgChargeComponent;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addUnitOnblur,
  calculateKgPerPrice,
  calculateTotalKgPrice,
  updateData,
} from "../../../state/mm-th-calculateAmount/mm-th-calculate-amount-slice";

const KgChargeRow_Mm_th = ({ rowId, rowNo, placeholder }) => {
  const { MM_TH_weight, MM_TH_kgPerPrice, MM_TH_totalKgPrice } = useSelector(
    (state) => state.mm_th_cost
  );

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
          id={`unit_${rowId}`}
          name={`unit_${rowId}`}
          placeholder="unit"
          value={MM_TH_weight}
          onChange={(e) => {
            dispatch(updateData({ type: "weight", value: e.target.value }));
          }}
          onBlur={() => {
            dispatch(addUnitOnblur("kg"));
            dispatch(calculateKgPerPrice());
            dispatch(calculateTotalKgPrice());
          }}
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          id={`unit_price_${rowId}`}
          name={`unit_price_${rowId}`}
          placeholder="unit price"
          type="text"
          readOnly
          disabled={true}
          value={MM_TH_kgPerPrice}
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
        text-center"
        />
      </td>
      <td
        scope="row"
        className=" py-4 font-medium text-black relative overflow-y-hidden"
      >
        <input
          readOnly
          disabled={true}
          value={MM_TH_totalKgPrice}
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

export default KgChargeRow_Mm_th;

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addUnitOnblur,
  calculateTotalAmount,
  updateData,
} from "../../../state/mm-th-calculateAmount/mm-th-calculate-amount-slice";

const PackageFeeComponent = ({ rowId, rowNo, placeholder }) => {
  const { MM_TH_packageFee } = useSelector((state) => state.mm_th_cost);
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
          disabled={true}
          placeholder={`no`}
          type="text"
          value={rowNo}
          readOnly
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          type="text"
          value="package fee"
          disabled={true}
          readOnly
          className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td className=" py-4 font-medium text-black  ">
        <input
          id={`unit_${rowId}`}
          name={`unit_${rowId}`}
          type="text"
          disabled={true}
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          id={`unit_price_${rowId}`}
          name={`unit_price_${rowId}`}
          type="text"
          disabled={true}
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
          text-center "
        />
      </td>
      <td
        scope="row"
        className=" py-4 font-medium text-black relative overflow-y-hidden"
      >
        <input
          id={`amount_${rowId}`}
          name={`amount_${rowId}`}
          placeholder="amount"
          value={MM_TH_packageFee}
          onChange={(e) => {
            dispatch(updateData({ type: "packageFee", value: e.target.value }));
          }}
          onBlur={() => {
            dispatch(addUnitOnblur("packageFee"));
            dispatch(calculateTotalAmount());
          }}
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
          text-center"
        />
      </td>
    </tr>
  );
};

export default PackageFeeComponent;

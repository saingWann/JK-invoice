import React from "react";

const DeliveryFee_MM_TH = ({ rowId, rowNo, placeholder }) => {
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

export default DeliveryFee_MM_TH;

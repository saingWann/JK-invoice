import React from "react";

const TableRowComponent = () => {
  return (
    <tr
      id="tr"
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-50"
    >
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          type="number"
          placeholder="no"
          className="max-w-20 bg-transparent rounded-lg border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          placeholder="description"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          placeholder="unit"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          placeholder="unit price"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 "
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          placeholder="amount"
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 "
        />
      </td>
    </tr>
  );
};

export default TableRowComponent;

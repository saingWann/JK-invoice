import React, { useState } from "react";

const KgChargeRowComponent = ({ placeholder, rowId, rowNo }) => {
  const [inputValue, setInputValue] = useState({
    quantity: "",
    quantityPrice: "",
    amount: "",
  });

  const handleQuantity = (e) => {
    let newQuantity = e.target.value;
    setInputValue({ ...inputValue, quantity: newQuantity });
  };

  const handleQuantityPrice = (e) => {
    const newQuantityPrice = e.target.value;
    console.log(newQuantityPrice);
    setInputValue({ ...inputValue, quantityPrice: newQuantityPrice });
  };

  const handleKgUnit = () => {
    if (inputValue.quantity) {
      setInputValue({ ...inputValue, quantity: inputValue.quantity + " KG" });
    }
  };
  const handleThbUnit = () => {
    if (inputValue.quantityPrice) {
      setInputValue({
        ...inputValue,
        quantityPrice: inputValue.quantityPrice + " THB",
      });
    }
  };

  const calculatePriceInTHB = () => {
    if (inputValue.quantity && inputValue.quantityPrice) {
      const quantity = inputValue.quantity.match(/(\d+)/);
      const quantityPrice = inputValue.quantityPrice.match(/(\d+)/);
      console.log(quantity, quantityPrice);
      setInputValue({
        ...inputValue,
        amount: quantity[0] * quantityPrice[0] + " THB",
      });
    }
  };

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
          value={placeholder}
          readOnly
          className="rounded-lg uppercase bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td className=" py-4 font-medium text-black  ">
        <input
          onChange={(e) => handleQuantity(e)}
          onBlur={handleKgUnit}
          id={`unit_${rowId}`}
          name={`unit_${rowId}`}
          placeholder="unit"
          value={inputValue.quantity}
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 text-center"
        />
      </td>
      <td scope="row" className=" py-4 font-medium text-black  ">
        <input
          onChange={(e) => handleQuantityPrice(e)}
          onBlur={handleThbUnit}
          value={inputValue.quantityPrice}
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
          placeholder="amount"
          onFocus={calculatePriceInTHB}
          readOnly
          value={inputValue.amount}
          type="text"
          className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
          text-center"
        />
      </td>
    </tr>
  );
};

export default KgChargeRowComponent;

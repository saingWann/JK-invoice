import React from "react";
import DatepickerComponent from "../datepicker/Datepicker.component";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerInfo } from "../../../state/customerInfo/customerInfoSlice";

const InvoiceHeaderComponent = () => {
  const { customer_name, customer_phone, customer_address } = useSelector(
    (state) => state.customerInfo
  );

  const dispatch = useDispatch();
  return (
    <>
      <p className="logo text-7xl font-bold text-center text-red-600">JK</p>

      <div
        id="invoiceHeader"
        className="lg:mt-10 lg:mb-5 my-5 flex max-sm:flex-col max-sm:gap-3 justify-between items-start "
      >
        <ul
          id="customerInfo"
          className="text-sm font-semibold lg:w-1/2 md:w-1/2  flex gap-1 flex-col "
        >
          <li className="flex gap-8 items-center ">
            <label htmlFor="customerName">Name</label>
            <input
              placeholder="customer name"
              value={customer_name}
              onChange={(e) =>
                dispatch(
                  updateCustomerInfo({ type: "name", value: e.target.value })
                )
              }
              type="text"
              name="customerName"
              id="customerName"
              className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm  uppercase"
            />
          </li>
          <li className="flex gap-8 items-center ">
            <label htmlFor="customerPhone">Phone</label>
            <input
              placeholder="phone"
              value={customer_phone}
              onChange={(e) =>
                dispatch(
                  updateCustomerInfo({ type: "phone", value: e.target.value })
                )
              }
              type="text"
              name="customerPhone"
              id="customerPhone"
              className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm uppercase"
            />
          </li>
          <li className="flex gap-5 items-center ">
            <label htmlFor="customerPhone">Address</label>
            <input
              placeholder="address"
              value={customer_address}
              onChange={(e) =>
                dispatch(
                  updateCustomerInfo({ type: "address", value: e.target.value })
                )
              }
              type="text"
              name="customerAddress"
              id="customerAddress"
              className="placeholder:font-light rounded-lg border-none focus:ring-red-600 w-full text-sm uppercase"
            />
          </li>
        </ul>

        {/* date */}
        <div className="flex w-[200px] gap-4 items-center">
          <p className="text-sm font-semibold">Date</p>
          <DatepickerComponent />
        </div>
      </div>
    </>
  );
};

export default InvoiceHeaderComponent;

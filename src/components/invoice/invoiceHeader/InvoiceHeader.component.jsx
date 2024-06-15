import React from "react";
import DatepickerComponent from "../datepicker/Datepicker.component";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerInfo } from "../../../state/customerInfo/customerInfoSlice";

const InvoiceHeaderComponent = () => {
  const { customer_name, customer_phone, customer_address } = useSelector(
    (state) => state.customerInfo,
  );

  const dispatch = useDispatch();
  return (
    <>
      <p className="logo text-center text-7xl font-bold text-red-600">JK</p>

      <div
        id="invoiceHeader"
        className="my-5 flex items-start justify-between max-sm:flex-col max-sm:gap-3 lg:mb-5 lg:mt-10"
      >
        <ul
          id="customerInfo"
          className="flex flex-col gap-1 text-sm font-semibold md:w-1/2 lg:w-1/2"
        >
          <li className="flex items-center gap-8">
            <label htmlFor="customerName">Name</label>
            <input
              placeholder="customer name"
              value={customer_name}
              onChange={(e) =>
                dispatch(
                  updateCustomerInfo({ type: "name", value: e.target.value }),
                )
              }
              type="text"
              name="customerName"
              id="customerName"
              className="w-full rounded-lg border-none text-sm uppercase placeholder:font-light focus:ring-red-600"
            />
          </li>
          <li className="flex items-center gap-8">
            <label htmlFor="customerPhone">Phone</label>
            <input
              placeholder="phone"
              value={customer_phone}
              onChange={(e) =>
                dispatch(
                  updateCustomerInfo({ type: "phone", value: e.target.value }),
                )
              }
              type="text"
              name="customerPhone"
              id="customerPhone"
              className="w-full rounded-lg border-none text-sm uppercase placeholder:font-light focus:ring-red-600"
            />
          </li>
          <li className="flex items-center gap-5">
            <label htmlFor="customerPhone">Address</label>
            <input
              placeholder="address"
              value={customer_address}
              onChange={(e) =>
                dispatch(
                  updateCustomerInfo({
                    type: "address",
                    value: e.target.value,
                  }),
                )
              }
              type="text"
              name="customerAddress"
              id="customerAddress"
              className="w-full rounded-lg border-none text-sm uppercase placeholder:font-light focus:ring-red-600"
            />
          </li>
        </ul>

        {/* date */}
        <div id="datePicker" className="flex w-[270px] items-center gap-4">
          <DatepickerComponent />
        </div>
      </div>
    </>
  );
};

export default InvoiceHeaderComponent;

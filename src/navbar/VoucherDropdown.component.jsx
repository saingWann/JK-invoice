import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { types } from "./types";
import { useDispatch } from "react-redux";
import { setVoucher } from "../state/voucherTypeState/selectVoucherSlice";

export default function VOucherDropdownComponent() {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center  flex-row flex-wrap mt-4">
      <Select
        label="select vouchers"
        placeholder="Select voucher type"
        defaultSelectedKeys={["THAI - MYANMAR"]}
        className="max-w-xs"
      >
        {types.map((type) => (
          <SelectItem
            onClick={() => {
              dispatch(setVoucher(type.value));
            }}
            key={type.value}
            value={type.value}
          >
            {type.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

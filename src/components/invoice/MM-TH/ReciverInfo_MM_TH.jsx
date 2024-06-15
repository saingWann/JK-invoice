import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateReceiverInfo } from "../../../state/receriverInfo/receiverInfoSlice";

const ReciverInfo_MM_TH = () => {
  const { receiver_name, receiver_phone, receiver_address } = useSelector(
    (state) => state.receiverInfo,
  );
  const dispatch = useDispatch();

  return (
    <div id="mm-th-receiver-form-wrapper" className="mt-2">
      <div className="w-full">
        <p className="mb-1 text-sm font-bold capitalize">Reciver's Info</p>
        <form action="submit" className="rounded-lg border py-3">
          <div className="mb-2 flex w-full">
            <span
              id="receiver-Info"
              className="flex w-1/2 items-center gap-7 px-3"
            >
              <label htmlFor="receiver-name" className="text-sm uppercase">
                Name
              </label>
              <input
                id="receiver-name"
                value={receiver_name}
                onChange={(e) =>
                  dispatch(
                    updateReceiverInfo({ type: "name", value: e.target.value }),
                  )
                }
                type="text"
                placeholder="Receiver Name"
                className="w-full rounded-lg border border-black/10 bg-transparent text-sm font-semibold placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
              />
            </span>
            <span
              id="receiver-Info"
              className="flex w-1/2 items-center gap-3 px-3"
            >
              <label htmlFor="receiver-phone" className="text-sm uppercase">
                phone
              </label>
              <input
                id="receiver-phone"
                value={receiver_phone}
                onChange={(e) =>
                  dispatch(
                    updateReceiverInfo({
                      type: "phone",
                      value: e.target.value,
                    }),
                  )
                }
                type="number"
                placeholder="Receiver Phone"
                className="w-full rounded-lg border border-black/10 bg-transparent text-sm font-semibold placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
              />
            </span>
          </div>
          <div>
            <span id="receiver-Info" className="items-top flex gap-3 px-3">
              <label htmlFor="receiver-address" className="text-sm uppercase">
                address
              </label>
              <textarea
                id="receiver-address"
                value={receiver_address}
                onChange={(e) =>
                  dispatch(
                    updateReceiverInfo({
                      type: "address",
                      value: e.target.value,
                    }),
                  )
                }
                type="text"
                placeholder="Receiver address"
                className="w-full resize-none rounded-lg border border-black/10 text-sm font-semibold outline-none placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:ring-red-600"
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReciverInfo_MM_TH;

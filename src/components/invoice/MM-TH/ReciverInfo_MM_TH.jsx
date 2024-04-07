import React from "react";

const ReciverInfo_MM_TH = ({ rowId, rowNo }) => {
  return (
    <div className="my-6">
      <div className="w-full">
        <p className="font-bold capitalize mb-3">Reciver's Info</p>
        <form action="submit" className="border  rounded-lg py-3  ">
          <div className="flex w-full mb-2">
            <span
              id="receiver-Info"
              className="w-1/2 flex gap-7 items-center px-3"
            >
              <label htmlFor="receiver-name" className=" uppercase text-sm ">
                Name
              </label>
              <input
                id="receiver-name"
                type="text"
                placeholder="Receiver Name"
                className="rounded-lg bg-transparent border border-black/10 focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 font-semibold"
              />
            </span>
            <span
              id="receiver-Info"
              className="w-1/2 flex gap-3 items-center px-3"
            >
              <label htmlFor="receiver-phone" className=" uppercase text-sm">
                phone
              </label>
              <input
                id="receiver-phone"
                type="text"
                placeholder="Receiver Phone"
                className="rounded-lg bg-transparent border border-black/10 focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400 font-semibold"
              />
            </span>
          </div>
          <div>
            <span id="receiver-Info" className="flex items-top gap-3 px-3">
              <label htmlFor="receiver-address" className=" uppercase text-sm">
                address
              </label>
              <textarea
                id="receiver-address"
                type="text"
                placeholder="Receiver address"
                className="border border-black/10 outline-none resize-none placeholder:text-xs placeholder:text-gray-400 placeholder:font-light  focus:ring-red-600 rounded-lg text-sm w-full font-semibold"
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReciverInfo_MM_TH;

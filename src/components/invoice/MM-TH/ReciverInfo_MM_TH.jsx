import React from "react";

const ReciverInfo_MM_TH = ({ rowId, rowNo }) => {
  return (
    <div className=" p-5">
      <div className="w-full">
        <p className="font-bold capitalize mb-3">Reciver's Info</p>
        <form action="submit" className="border p-4 rounded-lg">
          <div className="flex w-full mb-2">
            <span className="w-1/2 flex gap-3 items-center">
              <label htmlFor="name" className="font-semibold uppercase text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Reciver Name"
                className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400"
              />
            </span>
            <span className="w-1/2 flex gap-3 items-center">
              <label htmlFor="name" className="font-semibold uppercase text-sm">
                phone
              </label>
              <input
                type="text"
                placeholder="Reciver Phone"
                className="rounded-lg bg-transparent border-none focus:ring-red-600 w-full text-sm placeholder:text-xs placeholder:font-light placeholder:text-gray-400"
              />
            </span>
          </div>
          <div>
            <span className="flex items-top gap-3">
              <label htmlFor="name" className="font-semibold uppercase text-sm">
                address
              </label>
              <textarea
                type="text"
                placeholder="Reciver Phone"
                className="border-none outline-none resize-none p-0 focus:ring-red-600 rounded-lg text-sm w-full"
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReciverInfo_MM_TH;

"use client";

import { Button } from "flowbite-react";

const PrintBtnComponent = ({ func }) => {
  return (
    <button
      id="print-btn"
      onClick={() => window.print()}
      className="w-1/3 bg-red-600 px-6 py-3 rounded-full text-white font-bold hover:bg-red-700 active:bg-red-500"
    >
      Print
    </button>
  );
};

export default PrintBtnComponent;

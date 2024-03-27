"use client";

import { Button } from "flowbite-react";
import { printDiv } from "../../print/print";

const PrintBtnComponent = ({ func }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        id="print-btn"
        onClick={() => window.print()}
        className="bg-red-600 hover:bg-red-700 active:bg-red-500"
        color="failure"
        pill
      >
        Print
      </Button>
    </div>
  );
};

export default PrintBtnComponent;

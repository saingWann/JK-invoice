"use client";

import { Button } from "flowbite-react";
import { printDiv } from "../../print/print";

const PrintBtnComponent = ({ func }) => {
  console.log(func);
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => func()}
        className="bg-red-600 hover:bg-red-700 active:bg-red-500"
        color="failure"
        pill
      >
        Failure
      </Button>
    </div>
  );
};

export default PrintBtnComponent;

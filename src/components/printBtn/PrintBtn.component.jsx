import { useSelector } from "react-redux";
import {
  updateVoucherNumber,
  uploadRecords,
} from "../../state/data/recordsSlice";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { FileWarning, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { catPhoto } from "../../assets/exportPhoto";

const PrintBtnComponent = () => {
  const [isToast, setIsToast] = useState(false);

  const voucherType = useSelector((state) => state.voucherType);

  const { currentUser } = useSelector((state) => state.allUsers);

  const { kg, totalAmountInTHB, exchangeRateMMK, balance } = useSelector(
    (state) => state.cost
  );

  const { MM_TH_weight, MM_TH_grandBalance } = useSelector(
    (state) => state.mm_th_cost
  );

  const { AC_weight, AC_exchangeRate, AC_grandBalance } = useSelector(
    (state) => state.ac_cost
  );

  const { customer_name, customer_phone, customer_address } = useSelector(
    (state) => state.customerInfo
  );

  const { voucherNumber } = useSelector((state) => state.allRecords);

  const dispatch = useDispatch();

  const TH_MM_uploadData = () => {
    const date = moment().format("LLL");
    //upadte data
    const recordToUpload = {
      issueTime: date,
      customerName: customer_name,
      kg: kg,
      exchangeRate: exchangeRateMMK,
      userIssued: currentUser.userName,
      totalBaht: totalAmountInTHB,
      totalMMK: balance,
      userId: currentUser.id,
      type: "TH-MM",
      voucherNumber: voucherNumber,
    };
    if (customer_name && exchangeRateMMK && kg) {
      dispatch(uploadRecords(recordToUpload));
      dispatch(updateVoucherNumber());
      window.print();
    } else {
      setIsToast(true);
    }
  };

  const MM_TH_uploadData = () => {
    const date = moment().format("LLL");
    //upadte data

    console.log(currentUser.id);
    const recordToUpload = {
      issueTime: date,
      customerName: customer_name,
      kg: MM_TH_weight,
      exchangeRate: "",
      userIssued: currentUser.userName,
      totalBaht: "",
      totalMMK: MM_TH_grandBalance,
      userId: currentUser.id,
      type: "MM-TH",
      voucherNumber: voucherNumber,
    };
    if (customer_name && MM_TH_weight) {
      dispatch(uploadRecords(recordToUpload));
      dispatch(updateVoucherNumber());
      window.print();
    } else {
      setIsToast(true);
    }
  };
  const AC_uploadData = () => {
    const date = moment().format("LLL");
    const recordToUpload = {
      issueTime: date,
      customerName: customer_name,
      kg: AC_weight,
      exchangeRate: AC_exchangeRate,
      userIssued: currentUser.userName,
      totalBaht: "",
      totalMMK: AC_grandBalance,
      userId: currentUser.id,
      type: "AIR CARGO",
      voucherNumber: voucherNumber,
    };

    if (customer_name && AC_exchangeRate && AC_weight) {
      dispatch(uploadRecords(recordToUpload));
      dispatch(updateVoucherNumber());
      window.print();
    } else {
      setIsToast(true);
    }
  };

  const handlePrintBtn = () => {
    switch (voucherType) {
      case "THAI - MYANMAR": {
        TH_MM_uploadData();
        break;
      }
      case "MYANMAR - THAI": {
        MM_TH_uploadData();

        break;
      }
      case "AIR CARGO": {
        AC_uploadData();
        break;
      }
      default: {
        return;
      }
    }
  };
  return (
    <div className="w-full flex justify-end">
      {/* toast */}
      <div
        id="toast-warning"
        className={`fixed z-10 flex items-center w-full max-w-md p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-200 ease-out ${
          isToast
            ? "top-24 lg:right-[40%] md:right-[35%]  right-0 opacity-100"
            : "top-0 lg:right-[40%] md:right-[35%] right-0 opacity-0"
        }`}
        role="alert"
      >
        <img
          src={catPhoto}
          alt="cat photo"
          className={`absolute size-24 transition-all duration-500 ease-out delay-200 ${
            isToast ? "top-20 -right-10" : "top-0 -right-10"
          }`}
        />
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ">
          <TriangleAlert color="red" />
          {/* <span className="sr-only">Warning icon</span> */}
        </div>
        <div className="ms-3 text-sm font-bold text-red-500">
          Please fill the necessary information to print!plese check the form
          carefully and try again. (like customer name,exchange Rate or may be
          you miss the receiver info.)
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
          onClick={() => {
            // setCurrentUserToEdit(null);
            setIsToast(false);
          }}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>

      {/* toast end */}
      <Button
        id="print-btn"
        onClick={() => {
          handlePrintBtn(voucherType);
        }}
        className="w-1/3 bg-red-600 px-6 py-3 rounded-full text-white font-bold hover:bg-red-700 active:bg-red-500"
      >
        Print
      </Button>
    </div>
  );
};

export default PrintBtnComponent;

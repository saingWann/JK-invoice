import { useSelector } from "react-redux";
import { uploadRecords } from "../../state/data/recordsSlice";
import moment from "moment";
import { useDispatch } from "react-redux";

const PrintBtnComponent = () => {
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
    };
    dispatch(uploadRecords(recordToUpload));
  };

  const MM_TH_uploadData = () => {
    const date = moment().format("LLL");
    //upadte data

    const recordToUpload = {
      issueTime: date,
      customerName: customer_name,
      kg: MM_TH_weight,
      exchangeRate: "",
      userIssued: currentUser.userName,
      totalBaht: "",
      totalMMK: MM_TH_grandBalance,
      userId: currentUser.userId,
      type: "MM-TH",
    };
    dispatch(uploadRecords(recordToUpload));
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
      userId: currentUser.userId,
      type: "AIR CARGO",
    };

    dispatch(uploadRecords(recordToUpload));
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
    window.print();
  };
  return (
    <button
      id="print-btn"
      onClick={() => {
        handlePrintBtn(voucherType);
      }}
      className="w-1/3 bg-red-600 px-6 py-3 rounded-full text-white font-bold hover:bg-red-700 active:bg-red-500"
    >
      Print
    </button>
  );
};

export default PrintBtnComponent;

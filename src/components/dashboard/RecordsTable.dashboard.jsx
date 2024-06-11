import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/react";
import { useState } from "react";

const RecordsTable = () => {
  const categories = useSelector((state) => state.categories);

  const { currentUserRecords, loading } = useSelector(
    (state) => state.allRecords,
  );

  const [review, setReview] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(currentUserRecords.length / 10);

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;

  // Slice the data array to get the items for the current page
  const currentItems = currentUserRecords.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-auto font-body">
      <div className="relative mt-4 overflow-x-auto p-4 shadow-md">
        <div className="absolute flex gap-3 lg:right-4">
          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <button
                onClick={() => {
                  handlePageChange(i + 1);
                }}
                className={`rounded-lg px-4 py-2 shadow-md hover:bg-black/20 active:bg-black/40 lg:px-6 ${
                  currentPage === i + 1 && "bg-black text-white"
                }`}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <table className="w-full p-4 text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <caption className="bg-white p-5 text-left text-lg font-semibold uppercase text-gray-900 dark:bg-gray-800 dark:text-white max-sm:mt-10 rtl:text-right">
            {categories} voucher records
            {currentUserRecords.length === 0 && (
              <p className="mt-1 w-2/3 text-sm font-normal text-red-500 dark:text-gray-400">
                there is possible that there is no records in this categories.Or
                there is a problem while fetching data.Please try to refresh the
                page.
              </p>
            )}
          </caption>
          <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                customer name
              </th>
              <th scope="col" className="px-6 py-3">
                weight
              </th>

              <th scope="col" className="px-6 py-3">
                amount
              </th>
              <th scope="col" className="px-6 py-3">
                type
              </th>
              <th scope="col" className="px-6 py-3">
                voucher No.
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              {localStorage.getItem("currentRole") === "admin" && (
                <th scope="col" className="px-6 py-3">
                  issued by
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {loading &&
              Array.from({ length: 4 }, (_, i) => (
                <tr
                  key={i}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </th>
                  <td className="px-6 py-4">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </td>
                </tr>
              ))}
            {!loading &&
              currentItems.map((record, i) => (
                <tr
                  key={i}
                  className="cursor-pointer border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
                  onClick={() => setReview(record)}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {record.customerName}
                  </th>
                  <td className="px-6 py-4">{record.kg}</td>

                  <td className="whitespace-nowrap px-6 py-4">
                    {record.totalMMK}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{record.type}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {record.voucherNumber < 10
                      ? record.voucherNumber > 10 && record.voucherNumber < 100
                        ? record.voucherNumber > 100 &&
                          record.voucherNumber < 1000
                          ? String(record.voucherNumber).padStart(3, 0)
                          : String(record.voucherNumber).padStart(2, 0)
                        : String(record.voucherNumber).padStart(4, 0)
                      : String(record.voucherNumber).padStart(4, 0)}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    {record.issueTime}
                  </td>
                  {localStorage.getItem("currentRole") === "admin" && (
                    <td scope="col" className="px-6 py-3">
                      {record.userIssued}
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {review && (
        <div className="mt-10">
          <h1 className="mb-4 text-xl font-semibold">Review Detail</h1>
          <div className="flex flex-col gap-5 rounded-lg border p-5 text-sm shadow-inner">
            <div className="flex justify-start">
              <p className="w-1/3">Customer Name : {review.customerName}</p>
              <p className="w-1/3">Phone Number :{review.customerPhone}</p>
              <p className="w-1/3">
                Voucher Number : {review.type} - {review.voucherNumber}
              </p>
            </div>
            <div className="flex justify-start">
              <p className="w-1/3"> Total in Baht : {review.totalBaht}</p>
              <p className="w-1/3">Total in MMK : {review.totalMMK}</p>
              <p className="w-1/3">Exchange Rate : {review.exchangeRate}</p>
            </div>
            {review.receiverName && (
              <div className="flex justify-start">
                <p className="w-1/3"> Receiver Name : {review.receiverName}</p>
                <p className="w-1/3">Receiver Phone : {review.receiverPhone}</p>
                <p className="w-1/3">
                  Receiver Address : {review.receiverAddress}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordsTable;

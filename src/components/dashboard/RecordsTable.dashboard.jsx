import { useDispatch, useSelector } from "react-redux";
import { button, Skeleton } from "@nextui-org/react";
import { useState } from "react";

const RecordsTable = () => {
  const categories = useSelector((state) => state.categories);

  const { currentUserRecords, loading } = useSelector(
    (state) => state.allRecords
  );

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(currentUserRecords.length / 5);

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * 5;
  const indexOfFirstItem = indexOfLastItem - 5;

  // Slice the data array to get the items for the current page
  const currentItems = currentUserRecords.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" mx-auto font-body">
      <div className="relative overflow-x-auto shadow-md p-4 ">
        <div className="flex gap-3 absolute right-4">
          {Array.from({ length: totalPages }, (_, i) => {
            return (
              <button
                onClick={() => {
                  handlePageChange(i + 1);
                }}
                className={`shadow-md px-6 py-2 rounded-lg  hover:bg-black/20 active:bg-black/40 ${
                  currentPage === i + 1 && "bg-black text-white"
                }`}
                key={i}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-4">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 uppercase">
            {categories} voucher records
            {currentUserRecords.length === 0 && (
              <p className="mt-1 w-2/3 text-red-500 text-sm font-normal dark:text-gray-400">
                there is possible that there is no records in this categories.Or
                there is a problem while fetching data.Please try to refresh the
                page.
                {/* If the data is only showing skeleton animation, try to refresh
                the page and try again. After that if you still encounter the
                same problem there is possible that there is no records in this
                categories */}
              </p>
            )}
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
              {localStorage.getItem("currentUsername") === "adminJK" && (
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
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                  <td className="px-6 py-4 ">
                    <Skeleton className="w-3/5 rounded-lg">
                      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </td>
                  <td className="px-6 py-4 ">
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
                  className="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {record.customerName}
                  </th>
                  <td className="px-6 py-4">{record.kg}</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.totalMMK}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {record.voucherNumber < 10
                      ? record.voucherNumber > 10 && record.voucherNumber < 100
                        ? record.voucherNumber > 100 &&
                          record.voucherNumber < 1000
                          ? String(record.voucherNumber).padStart(3, 0)
                          : String(record.voucherNumber).padStart(2, 0)
                        : String(record.voucherNumber).padStart(4, 0)
                      : String(record.voucherNumber).padStart(4, 0)}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap ">
                    {record.issueTime}
                  </td>
                  {localStorage.getItem("currentUsername") === "adminJK" && (
                    <td scope="col" className="px-6 py-3">
                      {record.userIssued}
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordsTable;

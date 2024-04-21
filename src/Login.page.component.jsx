import React, { useEffect, useState } from "react";
import { Checkbox } from "@nextui-org/react";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./state/data/usersSlice";

const LoginPageComponent = () => {
  const dispatch = useDispatch();
  const [isToast, setIsToast] = useState(false);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <section className="h-[70vh]">
      <div
        action="submit"
        className="flex items-center justify-center flex-col h-full "
      >
        <h1 className="font-bold lg:text-3xl uppercase lg:mb-2">
          Login to continue
        </h1>
        <p className="text-slate-500 lg:w-1/3 w-full p-3 text-center lg:mb-5 text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia,
          perspiciatis nemo quas sunt tempora. Quis officia, itaque, laboriosam
          blanditiis debitis obcaecati eos iusto commodi voluptate ipsam
          doloremque numquam dicta?
        </p>

        <div
          id="toast-warning"
          className={`fixed z-10 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-200 ease-out ${
            isToast ? "top-20 opacity-100" : "top-0 opacity-0"
          }`}
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-sm  text-red-500 font-bold">
            User not fount.Please check username and password correctly.
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
            onClick={() => setIsToast(false)}
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

        {/* login card */}
        <div className="lg:p-10 md:p-5 px-10 py-7  bg-slate-50/50 backdrop-blur-sm rounded-xl lg:shadow-lg flex flex-col gap-4 lg:w-1/5 md:w-1/3 w-full">
          <LoginForm setIsToast={setIsToast} />
        </div>
      </div>
    </section>
  );
};

export default LoginPageComponent;

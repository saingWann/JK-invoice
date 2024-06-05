import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditUserInfoFormComponent from "../EditUserInfoForm.component";
import {
  CircleCheckBig,
  LayoutDashboard,
  UserPlus,
  UserRoundCog,
} from "lucide-react";
import { Button, Tooltip } from "@nextui-org/react";
import AddNewUserForm from "./AddNewUserForm";
import Container from "../Container";
import UserCardComponent1 from "./UserCard.component";
import { useNavigate } from "react-router-dom";
import { bunny } from "../../assets/exportPhoto";

const UserManagementComponent = () => {
  const { allUsers, currentUser } = useSelector((state) => state.allUsers);
  const userToEdit = useSelector((state) => state.editUser);
  const [addNew, setAddNew] = useState(false);
  const [currentUsetToEdit, setCurrentUserToEdit] = useState(null);
  const [isToast, setIsToast] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("renderes");
    if (allUsers && userToEdit) {
      const currentEditedUser = allUsers.filter(
        (user) => user.userName === userToEdit
      );
      setCurrentUserToEdit(currentEditedUser[0]);
    }
  }, [userToEdit]);

  return (
    <Container>
      <section className="lg:p-10 p-6 min-h-[70vh]">
        {/* navigation */}
        <div className="fixed xl:flex  flex-col hidden gap-5 shadow-md px-4 py-10 rounded-full min-h-[50vh] top-20 left-20">
          <Tooltip content="Dashboard">
            <button
              onClick={() => navigate(`/profile/${currentUser.userName}`)}
              className={`p-3 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full 
              }`}
            >
              <LayoutDashboard />
            </button>
          </Tooltip>
          <Tooltip content="User Management">
            <button
              onClick={() =>
                navigate(`/profile/${currentUser.userName}/userManagement`)
              }
              className={`p-3 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full bg-black text-white`}
            >
              <UserRoundCog />
            </button>
          </Tooltip>
        </div>

        <div className="fixed flex xl:hidden lg:w-52 gap-5 shadow-md lg:pl-5 pl-2 lg:py-4 py-2 rounded-l-full top-16 right-0 z-20 bg-black">
          <Tooltip content="Dashboard">
            <button
              onClick={() => navigate(`/profile/${currentUser.userName}`)}
              className={`p-2 size-10 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full text-white`}
            >
              <LayoutDashboard />
            </button>
          </Tooltip>
          <Tooltip content="User Management">
            <button
              onClick={() =>
                navigate(`/profile/${currentUser.userName}/userManagement`)
              }
              className={`p-2 size-10 hover:scale-95 active:scale-105 transition-all  duration-300 rounded-full bg-white
              }`}
            >
              <UserRoundCog />
            </button>
          </Tooltip>
        </div>

        {/* toast */}
        <div
          id="toast-warning"
          className={`fixed z-10 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-200 ease-out ${
            isToast
              ? "top-24 lg:right-[40%] md:right-[35%]  right-0 opacity-100"
              : "top-0 lg:right-[40%] md:right-[35%] right-0 opacity-0"
          }`}
          role="alert"
        >
          {/* <img
            src={bunny}
            alt="bunny photo"
            className={`absolute size-24 transition-all duration-200 ease-out  ${
              isToast ? "-top-14 right-0" : "top-0 right-0"
            }`}
          /> */}

          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ">
            <CircleCheckBig color="green" />
            {/* <span className="sr-only">Warning icon</span> */}
          </div>
          <div className="ms-3 text-sm font-bold text-green-500">
            Action completed successfully.Try to refresh to see the latest data
            updated user info.
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

        <p className="text-2xl font-body font-semibold uppercase max-sm:text-lg max-sm:font-bold lg:p-0 px-3 border-b-1">
          User Management
        </p>

        <div className=" ml-auto w-fit mt-5">
          <Tooltip content="add new user">
            <Button
              onClick={() => {
                setCurrentUserToEdit(null);
                setAddNew(!addNew);
              }}
              className="px-10 py-2 border bg-white shadow-md rounded-full hover:bg-slate-100 active:scale-95 duration-300 transition-all"
            >
              <UserPlus />
            </Button>
          </Tooltip>
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="py-10 flex flex-col gap-3 lg:w-1/2 w-full ">
            {allUsers?.map((user) => (
              <UserCardComponent1
                setAddNew={setAddNew}
                setIsToast={setIsToast}
                key={user.id}
                userInfo={user}
              />
            ))}
          </div>
          {addNew && (
            <AddNewUserForm setAddNew={setAddNew} setIsToast={setIsToast} />
          )}
          {currentUsetToEdit && (
            <EditUserInfoFormComponent
              currentUsetToEdit={currentUsetToEdit}
              setCurrentUserToEdit={setCurrentUserToEdit}
              setIsToast={setIsToast}
            />
          )}
          {currentUsetToEdit === null && !addNew && (
            <div className="lg:w-1/2 w-full lg:p-10">
              <p className="font-body font-bold text-3xl mb-5">Welcome!</p>
              <p>
                please select the user card to edit the existed user or click
                the add new button on the top right to create a new user.
              </p>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default UserManagementComponent;

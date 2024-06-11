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
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
    if (allUsers && userToEdit) {
      const currentEditedUser = allUsers.filter(
        (user) => user.userName === userToEdit,
      );
      setCurrentUserToEdit(currentEditedUser[0]);
    }
  }, [userToEdit]);

  return (
    <Container>
      <section className="min-h-[70vh] p-6 lg:p-10">
        {/* navigation */}
        <div className="fixed left-20 top-20 hidden min-h-[50vh] flex-col gap-5 rounded-full px-4 py-10 shadow-md xl:flex">
          <Tooltip content="Dashboard">
            <button
              onClick={() => navigate(`/profile/${currentUser.userName}`)}
              className={`} rounded-full p-3 transition-all duration-300 hover:scale-95 active:scale-105`}
            >
              <LayoutDashboard />
            </button>
          </Tooltip>
          <Tooltip content="User Management">
            <button
              onClick={() =>
                navigate(`/profile/${currentUser.userName}/userManagement`)
              }
              className={`rounded-full bg-black p-3 text-white transition-all duration-300 hover:scale-95 active:scale-105`}
            >
              <UserRoundCog />
            </button>
          </Tooltip>
        </div>

        <div className="fixed right-0 top-16 z-20 flex gap-5 rounded-l-full bg-black py-2 pl-2 shadow-md lg:w-52 lg:py-4 lg:pl-5 xl:hidden">
          <Tooltip content="Dashboard">
            <button
              onClick={() => navigate(`/profile/${currentUser.userName}`)}
              className={`size-10 rounded-full p-2 text-white transition-all duration-300 hover:scale-95 active:scale-105`}
            >
              <LayoutDashboard />
            </button>
          </Tooltip>
          <Tooltip content="User Management">
            <button
              onClick={() =>
                navigate(`/profile/${currentUser.userName}/userManagement`)
              }
              className={`} size-10 rounded-full bg-white p-2 transition-all duration-300 hover:scale-95 active:scale-105`}
            >
              <UserRoundCog />
            </button>
          </Tooltip>
        </div>

        {/* toast */}
        <div
          id="toast-warning"
          className={`fixed z-10 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow transition-all duration-200 ease-out dark:bg-gray-800 dark:text-gray-400 ${
            isToast
              ? "right-0 top-24 opacity-100 md:right-[35%] lg:right-[40%]"
              : "right-0 top-0 opacity-0 md:right-[35%] lg:right-[40%]"
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

          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center">
            <CircleCheckBig color="green" />
            {/* <span className="sr-only">Warning icon</span> */}
          </div>
          <div className="ms-3 text-sm font-bold text-green-500">
            Action completed successfully.Try to refresh to see the latest data
            updated user info.
          </div>

          <button
            type="button"
            className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
            onClick={() => {
              // setCurrentUserToEdit(null);
              setIsToast(false);
            }}
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-3 w-3"
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

        <p className="border-b-1 px-3 font-body text-2xl font-semibold uppercase max-sm:text-lg max-sm:font-bold lg:p-0">
          User Management
        </p>

        <div className="ml-auto mt-5 w-fit">
          <Tooltip content="add new user">
            <Button
              onClick={() => {
                setCurrentUserToEdit(null);
                setAddNew(!addNew);
              }}
              className="rounded-full border bg-white px-10 py-2 shadow-md transition-all duration-300 hover:bg-slate-100 active:scale-95"
            >
              <UserPlus />
            </Button>
          </Tooltip>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto flex w-full flex-col gap-3 py-10 md:w-1/2 lg:w-1/2">
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
            <div className="w-full lg:w-1/2 lg:p-10">
              <p className="mb-5 font-body text-3xl font-bold">Welcome!</p>
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

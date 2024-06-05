import React from "react";
import { useDispatch } from "react-redux";
import { setUserToEdit } from "../../state/data/editUserSlice";
import { DeleteIcon, Settings, Trash2 } from "lucide-react";
import { Tooltip } from "@nextui-org/react";
import { deleteUser } from "../../state/data/usersSlice";

const UserCardComponent1 = ({ userInfo, setAddNew, setIsToast }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log("first");
    dispatch(setUserToEdit(userInfo.userName));
    setAddNew(false);
  };

  const handleDelete = (userToDelete) => {
    console.log(userToDelete);
    const idWithNoNumber = userToDelete.id.match(/(\d+)/)[0];
    const payloadObj = { ...userToDelete, idToDelete: idWithNoNumber };
    dispatch(deleteUser(payloadObj));
    setIsToast(true);
    // console.log(idWithNoNumber);
  };
  return (
    <div className="bg-slate-50  hover:shadow-sm hover:bg-slate-100 px-6 py-3 rounded-lg lg:min-w-[50%] w-full border shadow-inner flex justify-between items-center">
      <div>
        <p className="font-bold uppercase text-sm">{userInfo.userName}</p>
        <p className="text-slate-600 capitalize text-xs">{userInfo.role}</p>
      </div>
      <div className="flex gap-4">
        <Tooltip content="edit">
          <Settings
            onClick={handleClick}
            size={20}
            className="hover:text-slate-400 active:scale-90 hover:scale-105 duration-200 transition-all cursor-pointer"
          />
        </Tooltip>
        <Tooltip content="delete">
          <Trash2
            onClick={() => handleDelete(userInfo)}
            size={20}
            className="hover:text-slate-400 active:scale-90 hover:scale-105 duration-200 transition-all cursor-pointer"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default UserCardComponent1;

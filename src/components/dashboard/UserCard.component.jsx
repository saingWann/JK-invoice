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
    <div className="bg-slazte-50 flex w-full items-center justify-between rounded-lg border px-6 py-3 hover:bg-slate-50 hover:shadow-sm lg:min-w-[50%]">
      <div>
        <p className="text-sm font-bold uppercase">{userInfo.userName}</p>
        <p className="text-xs capitalize text-slate-600">{userInfo.role}</p>
      </div>
      <div className="flex gap-4">
        <Tooltip content="edit">
          <Settings
            onClick={handleClick}
            size={20}
            className="cursor-pointer transition-all duration-200 hover:scale-105 hover:text-slate-400 active:scale-90"
          />
        </Tooltip>
        <Tooltip content="delete">
          <Trash2
            onClick={() => handleDelete(userInfo)}
            size={20}
            className="cursor-pointer transition-all duration-200 hover:scale-105 hover:text-slate-400 active:scale-90"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default UserCardComponent1;

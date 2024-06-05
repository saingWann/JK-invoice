import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import TextInputForm from "../form/TextInput.form";
import { Button, Checkbox } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../state/data/usersSlice";
import SelectBoxForm from "../form/SelectBox.form";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

const EditUserInfoFormComponent = ({
  currentUsetToEdit,
  setCurrentUserToEdit,
  setIsToast,
}) => {
  const [showPassword, toggleShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    const payload = {
      userName: values.userName,
      passWord: values.newPassword,
      id: currentUsetToEdit.id,
      role: values.role,
    };
    dispatch(updateUserInfo(payload));
    setCurrentUserToEdit(null);
    setIsToast(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        className="xl:w-1/2 md:w-1/2 mx-auto lg:w-1/2 w-full lg:p-10 max-md:-order-1"
      >
        <p className="font-body font-bold text-3xl mb-5">Edit User Info</p>
        <Formik
          enableReinitialize={true}
          initialValues={{
            userName: currentUsetToEdit.userName,
            newPassword: currentUsetToEdit.passWord,
            confirmPassword: currentUsetToEdit.passWord,
          }}
          validationSchema={Yup.object({
            userName: Yup.string().required("username can not be empty"),
            newPassword: Yup.string().required("enter password to continue"),
            confirmPassword: Yup.string().required(
              "enter password to continue"
            ),
            role: Yup.string()
              .oneOf(["staff", "admin"], "Invalid Role")
              .required("Required"),
          })}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <TextInputForm
              name="userName"
              id="userName"
              label="username"
              type="text"
              placeholder="Enter username"
            />

            <SelectBoxForm label="Role" name="role">
              <option id="role" value="">
                Select role
              </option>
              <option id="role" value="staff">
                staff
              </option>
              <option id="role" value="admin">
                admin
              </option>
            </SelectBoxForm>

            <TextInputForm
              name="newPassword"
              id="newPassword"
              label="enter new password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
            />
            <TextInputForm
              name="confirmPassword"
              id="confirmPassword"
              label="confirm password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
            />

            <Checkbox
              size="sm"
              color="danger"
              onChange={() => toggleShowPassword(!showPassword)}
            >
              Show Password
            </Checkbox>

            <div className="flex flex-col gap-3 mt-4">
              <Button
                type="submit"
                className="bg-red-600 font-bold capitalize text-white  px-4 py-2 rounded-lg hover:bg-red-500 active:bg-red-600 mt-4"
              >
                update
              </Button>
            </div>
          </Form>
        </Formik>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditUserInfoFormComponent;

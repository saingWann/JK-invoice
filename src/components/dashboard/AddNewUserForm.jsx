import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Button, Checkbox } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import TextInputForm from "../../form/TextInput.form";
import { addNewUser } from "../../state/data/usersSlice";
import SelectBoxForm from "../../form/SelectBox.form";
import { motion, AnimatePresence } from "framer-motion";

const AddNewUserForm = ({ setIsToast, setAddNew }) => {
  const [showPassword, toggleShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    const newUserInfo = {
      userName: values.userName,
      passWord: values.password,
      role: values.role,
    };
    console.log(newUserInfo);
    dispatch(addNewUser(newUserInfo));
    setIsToast(true);
    setAddNew(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        className="xl:w-1/2 lg:w-1/2 w-full lg:p-10 font-body  max-md:-order-1"
      >
        <p className="font-body font-bold text-3xl mb-5">Add a new user</p>
        <Formik
          enableReinitialize={true}
          initialValues={{
            userName: "",
            password: "",
            confirmPassword: "",
            role: "",
          }}
          validationSchema={Yup.object({
            userName: Yup.string().required("username can not be empty"),
            password: Yup.string().required("enter password to continue"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm the password to continue"),
            role: Yup.string()
              .oneOf(["staff", "admin"], "Invalid Role")
              .required("Required"),
          })}
          onSubmit={(values) => {
            //   console.log("first");
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
              <option value="">Select role</option>
              <option value="staff">staff</option>
              <option value="admin">admin</option>
            </SelectBoxForm>

            <TextInputForm
              name="password"
              id="password"
              label="enter password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
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
                Add Now
              </Button>
            </div>
          </Form>
        </Formik>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddNewUserForm;

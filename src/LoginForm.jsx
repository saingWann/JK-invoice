import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInputForm from "./form/TextInput.form";
import { Checkbox } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCurrentUser } from "./state/data/usersSlice";

const LoginForm = ({ setIsToast }) => {
  const [showPassword, toggleShowPassword] = useState(false);
  const { allUsers } = useSelector((state) => state.allUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/invoice");
    }
  }, []);

  const handleSubmit = (value) => {
    console.log(allUsers);
    const userNow = allUsers.filter(
      (user) =>
        user.passWord === value.password && user.userName === value.username
    )[0];
    console.log(userNow);

    // console.log(allUsers);
    if (userNow) {
      dispatch(setCurrentUser(userNow));
      localStorage.setItem("auth", JSON.stringify(userNow.token));
      navigate("/invoice");
      localStorage.setItem("currentUserId", userNow.id);
      localStorage.setItem("currentUsername", userNow.userName);
      setIsToast(false);
      // console.log(currentUser);
    } else {
      // console.log(userNow[0]);
      // alert("User Not Found!");
      setIsToast(true);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("username can not be empty"),
        password: Yup.string().required("enter password to continue"),
      })}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <Form>
        <TextInputForm
          name="username"
          id="username"
          label="username"
          type="text"
          placeholder="Enter username"
        />

        <TextInputForm
          name="password"
          id="password"
          label="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
        />

        {/* <CheckBoxForm name="showPassword">Show Password</CheckBoxForm> */}
        <div className="flex flex-col gap-3 mt-4">
          <Checkbox
            size="sm"
            color="danger"
            onChange={() => toggleShowPassword(!showPassword)}
          >
            Show Password
          </Checkbox>

          <button
            type="submit"
            className="bg-red-600 text-white  px-4 py-2 rounded-lg hover:bg-red-500 active:bg-red-600 mt-4"
          >
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;

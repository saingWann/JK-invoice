import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInputForm from "./form/TextInput.form";
import CheckBoxForm from "./form/CheckBox.form";
import { Checkbox } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, toggleShowPassword] = useState(false);
  const navigate = useNavigate();

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
        console.log(values);
        navigate("/invoice");
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

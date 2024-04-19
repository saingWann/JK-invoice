import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";

const LoginPageComponent = () => {
  const [showPassword, toggleShowPassword] = useState(false);
  return (
    <section className="h-[70vh]">
      <form
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

        {/* login card */}
        <div className="p-10  bg-slate-50/50 backdrop-blur-sm rounded-xl shadow-lg flex flex-col gap-4 lg:w-1/5 md:w-1/3 w-full">
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="username" className="font-semibold text-lg">
              Username
            </label>
            <div className="absolute top-[36px] h-10 w-1 bg-red-600"></div>
            <input
              type="text"
              id="username"
              placeholder="enter username"
              className=" bg-slate-100 border-none  focus:ring-red-600 w-full  placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
            "
            />
          </div>

          <div className="flex flex-col gap-2 relative items-start">
            <label htmlFor="password" className="font-semibold text-lg">
              Password
            </label>
            <div className="absolute top-[36px] h-10 w-1 bg-red-600"></div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="enter password"
              className=" bg-slate-100 border-none  focus:ring-red-600 w-full placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
            "
            />
            <div className="flex gap-3 mt-2 items-center">
              <Checkbox
                size="sm"
                color="danger"
                onChange={() => toggleShowPassword(!showPassword)}
              >
                Show Password
              </Checkbox>
            </div>
          </div>

          <button className="bg-red-600 text-white  px-4 py-2 rounded-lg hover:bg-red-500 active:bg-red-600 mt-4">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPageComponent;

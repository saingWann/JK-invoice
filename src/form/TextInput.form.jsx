import React from "react";
import { useField } from "formik";

const TextInputForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3 relative">
      <label
        className="uppercase font-semibold"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="my-2 bg-slate-100 border-none  focus:ring-red-600 w-full  placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-xs text-red-600  mb-3">{meta.error}</div>
      ) : null}

      <div className="h-10 w-1 bg-red-600 absolute top-8"></div>
    </div>
  );
};

export default TextInputForm;

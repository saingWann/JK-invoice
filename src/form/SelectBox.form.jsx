import { useField } from "formik";
import React from "react";

const SelectBoxForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-5 relative">
      <label
        className="uppercase font-semibold"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        className="border-0 bg-slate-100 mt-2 w-full"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-xs mt-2 text-red-600  mb-3">
          {meta.error}
        </div>
      ) : null}

      <div className="h-10 w-1 bg-red-600 absolute top-8"></div>
    </div>
  );
};

export default SelectBoxForm;

import { Field } from "formik";
import React from "react";

const CustomInput = ({ name, label, touched, errors, type }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        type={type}
        className={`form-control ${
          touched[name] && errors[name] ? "error" : ""
        }`}
      />
      {touched[name] && errors[name] ? (
        <div className="err-msg">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;

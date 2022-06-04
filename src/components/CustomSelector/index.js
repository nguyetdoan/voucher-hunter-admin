import { Field } from "formik";
import React, { useEffect, useState } from "react";

const CustomSelector = ({
  placeholder,
  name,
  setFieldValue,
  selectOptions,
  label,
  setTouched,
  touched,
  errors,
  values,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // When choose an option it will update selected field and show on select field.
  // At the same time update id of category field in formik
  const handleClick = (e, option) => {
    e.stopPropagation();
    setFieldValue(name, option);
    setShowOptions(false);
  };

  const toggleSelect = (e) => {
    e.stopPropagation();
    setShowOptions((state) => !state);

    if (!isTouched) {
      setIsTouched(true);
    }
  };

  useEffect(() => {
    // when click outside options show off
    const handleClickOutside = () => {
      if (showOptions) {
        setShowOptions(false);
      }
      if (isTouched && !touched[name]) {
        setTouched({ ...touched, [name]: true });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [setTouched, touched, name, isTouched, showOptions]);

  return (
    <div className="custom-select">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name}>
        <option value="">{placeholder}</option>
        {selectOptions.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </Field>

      {/* Custom css and show on the screen */}
      <div className="input-field">
        <div
          className={`w-100 select-selected ${showOptions ? "show-box" : ""} ${
            values[name] === "" ? "not-selected" : ""
          } ${touched[name] && errors[name] ? "error" : ""}
          `}
          onClick={toggleSelect}
        >
          {values[name] || placeholder}
        </div>
        {/* <div className="arrow-icon">
          <IoIosArrowDown />
        </div> */}
        {touched[name] && errors[name] ? (
          <div className="err-msg">{errors[name]}</div>
        ) : null}
      </div>

      <div
        className={`select-items ${!showOptions ? "select-hide" : ""} bg-white`}
      >
        {selectOptions.map((option, i) => (
          <div
            key={i}
            className={option === values[name] ? "same-as-selected" : ""}
            onClick={(e) => handleClick(e, option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelector;

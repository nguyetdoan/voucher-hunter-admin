import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /[a-z][A-Z][0-9]/,
      "Password should contains at least one uppercase, one lowercase and a number in it"
    ),
});

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="sign-up-bg">
      <div className="container text-center">
        <div className="sign-up__container">
          <div className="logo-container">
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="sign-up-form">
            <h2 className="title">Welcome Back</h2>
            <p>Log In to Your Account!</p>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={LoginSchema}
            >
              {({ errors, touched }) => (
                <Form className="text-start">
                  <div className="input-field">
                    {errors.email && touched.email ? (
                      <BiErrorCircle className="error-msg" />
                    ) : null}
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                  </div>
                  <div className="input-field">
                    {errors.password && touched.password ? (
                      <BiErrorCircle className="error-msg" />
                    ) : null}
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <label className="checkbox">
                    Remember me
                    <Field type="checkbox" name="remember" />
                    <span className="checkmark"></span>
                  </label>
                  <button
                    className="btn text-center w-100 submit-btn"
                    type="submit"
                  >
                    Sign in
                  </button>
                </Form>
              )}
            </Formik>
            <p className="forgot-pw">Forgot your password?</p>
          </div>
        </div>
        <p className="sign-footer">
          <img src="images/logo.png" alt="" /> © 2020{" "}
          <span className="fw-bold">Cursus</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

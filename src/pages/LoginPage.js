import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authActions from "../actions/authActions";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { email, password } = values;

    dispatch(authActions.login({ email, password }));
  };

  return (
    <div className="sign-up-bg">
      <div className="container text-center">
        <div className="sign-up__container">
          <div className="logo-container">
            <img src="image/logo.png" alt="logo" />
          </div>
          <div className="sign-up-form">
            <h2 className="title">Welcome Back</h2>
            <p>Log Into Your Account!</p>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={LoginSchema}
            >
              {({ errors, touched }) => (
                <Form className="text-start">
                  <div className="input-field">
                    {errors.email && touched.email ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                    {errors.email && touched.email && (
                      <p className="error-txt">{errors.email}</p>
                    )}
                  </div>
                  <div className="input-field">
                    {errors.password && touched.password ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <p className="error-txt">{errors.password}</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label className="checkbox">
                      Remember me
                      <Field type="checkbox" name="remember" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <button
                    className={`btn text-center w-100 submit-btn`}
                    type="submit"
                  >
                    Log in
                  </button>
                </Form>
              )}
            </Formik>
            <p className="policy-txt">
              Or
              <span onClick={() => navigate("/forgot-password")}>
                {" "}
                Forgot your password
              </span>
            </p>
          </div>
        </div>
        <p className="sign-footer">
          <img src="images/sign_logo.png" alt="" />© 2022{" "}
          <span className="fw-bold">Cursus</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

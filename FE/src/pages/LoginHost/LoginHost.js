import React, { useEffect, useState } from "react";
import styles from "./LoginHost.module.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import MyInput from "../../components/MyInput/MyInput";
const cx = classNames.bind(styles);
function Login1() {
  const [currentAccount, setCurrentAccount] = useState(false);

  const [value] = useState([]);

  useEffect(() => {
    // console.log(value);
  }, [value]);

  const handleContinue = () => {
    setCurrentAccount(!currentAccount);
  };
  return (
    <div className={cx("login")}>
      <div className={cx("login__top")}>
        <h1 className={cx("heading")}>Login as a Host</h1>

        <Link to="/" className={cx("close-icon__container")}>
          <AiOutlineClose />
        </Link>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        initialTouched={{
          field: true,
        }}
        validateOnMount
        validationSchema={Yup.object(
          !currentAccount
            ? {
                username: Yup.string().required("Required"),
              }
            : {
                password: Yup.string().required("required"),
              }
        )}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            // const jsonData = JSON.stringify(currentAccount);
            // localStorage.setItem("currentAccount", jsonData);
            axios
              .post(
                "http://103.184.113.181/account/login",
                JSON.stringify(values)
              )
              .then(function (response) {
                if (
                  response.data.username === values.username &&
                  response.data.role === "host"
                ) {
                  console.log(response.data);
                  axios
                    .get(`http://103.184.113.181/customer/${response.data.id}`)
                    .then(function (response) {
                      const userDataJson = JSON.stringify(response.data);
                      localStorage.setItem("userData", userDataJson);
                      console.log(response);
                      window.location.href = "/HostPage";
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

                  // navigate("/");
                } else {
                  alert(
                    "Please check your password and User Name and try again."
                  );
                }
              })
              .catch(function (error) {
                alert(
                  "Please check your password and User Name and try again."
                );
                console.log(error.toJSON());
              });
            setSubmitting(false);
          }, 1);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            id="myform"
            className={cx("login-form")}
          >
            <div className={cx("input-container")}>
              <MyInput
                label="User Name"
                type="text"
                name="username"
                className={cx("phonenumber")}
                placeholder={"Enter your name"}
              ></MyInput>
              <MyInput
                label="Password"
                type="password"
                name="password"
                className={cx("password")}
                placeholder={"Enter your password"}
              ></MyInput>
            </div>
            <p className={cx("login-note")}>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
            <div className={cx("button-container")}>
              <Button
                className={cx("disabled")}
                type="submit"
                fourth
                onClick={handleContinue}
                rounded
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {formik.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login1;

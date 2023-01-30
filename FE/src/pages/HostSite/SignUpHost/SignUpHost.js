import React from "react";
import styles from "../SignUpHost/SignUpHost.module.css";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import FormikSignUp from "../../../components/FormikSignUp/FormikSignUp";

const cx = classNames.bind(styles);
function SignUpHost() {
  return (
    <div className={cx("sign-up")}>
      <div className={cx("sign-up__top")}>
        <h1 className={cx("heading")}>Become A Host</h1>
        <Link to="/" className={cx("close-icon__container")}>
          <AiOutlineClose />
        </Link>
      </div>
      <div className={cx("sign-up__intro")}>Let's get you started</div>
      <div className={cx("sign-up__desc")}>Sign up with your information</div>
      <FormikSignUp host />
      <p className={cx("or")}>or</p>
    </div>
  );
}

export default SignUpHost;

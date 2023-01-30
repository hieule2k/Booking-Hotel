import React from "react";
import { useField } from "formik";
import styles from "../MyInput/MyInput.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function MyInput({ type, className, label, account = false, ...props }) {
  const [field, meta] = useField(props);
  const classes = cx({
    [className]: className,
  });

  return (
    <div className={account ? cx("account-container") : cx("container")}>
      <label className={!account ? cx("label") : cx("account-edit")}>
        {label}
      </label>
      <input className={classes} type={type} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={cx("error")}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export default MyInput;

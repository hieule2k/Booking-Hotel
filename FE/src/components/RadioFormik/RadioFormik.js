import { useField } from "formik";
import classNames from "classnames/bind";
import React from "react";
import styles from "../RadioFormik/RadioFormik.module.css";
const cx = classNames.bind(styles);

const RadioFomik = ({ value, checked, children, origin, ...props }) => {
  const [field] = useField(props);
  let classes = cx("radio");
  if (origin) {
    classes = cx("origin");
  }
  return (
    <div>
      <label className={!origin ? cx("add_type") : null}>
        <input
          {...field}
          type="radio"
          value={value}
          className={classes}
          // checked={checked}
        />
        <span className={!origin ? cx("name_type") : null}> {children}</span>
      </label>
    </div>
  );
};

export default RadioFomik;

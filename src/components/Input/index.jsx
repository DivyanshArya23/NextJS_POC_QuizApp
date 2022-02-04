import React from "react";
import cns from "classnames";
import styles from "./index.module.scss";

const Input = ({ value, onChange, className, ...rest }) => {
  return (
    <input
      className={cns(styles.inputBox, "px-2", className)}
      type="text"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;

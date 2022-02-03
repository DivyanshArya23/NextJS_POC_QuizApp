import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  className,
  onBlur,
  type,
  onClick,
  name,
  disabled = false,
  placeholder,
  children,
  style,
  active,
}) => (
  <button
    style={style}
    className={classNames(
      styles.input,
      active ? styles.activeButton : "",
      className
    )}
    type={type}
    onClick={onClick}
    name={name}
    placeholder={placeholder}
    onBlur={onBlur}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;

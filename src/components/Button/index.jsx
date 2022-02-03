import classNames from "classnames";
import classes from "./Button.module.scss";

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
      "globalButton",
      classes.input,
      active ? classes.activeButton : "",
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

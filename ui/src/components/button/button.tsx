import { FC } from "react";
import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button: FC<ButtonProps> = ({
  children,
  variant = "normal",
  size = "md",
  fullWidth,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${fullWidth ? styles.buttonFullWidth : ""} ${
        size ? `button_size_${size}` : ""
      } ${variant ? `button_size_${variant}` : ""} ${
        disabled ? styles.buttonDisabled : ""
      } ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

"use client";

import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  outline?: boolean;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
};
const Button:React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  outline = false,
  fullWidth = false,
  onClick,
}) => {

  const buttonClasses = `${styles.button} ${styles[variant]} 
    ${outline ? styles.outline : ""} 
    ${fullWidth ? styles.fullWidth : ""}`.trim();

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

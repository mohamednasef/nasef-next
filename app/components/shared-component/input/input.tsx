"use client";

import React, { useState } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "time" | "color" | "search";
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
  step?: number;
  errorMessage?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  fullWidth = false,
  disabled = false,
  className = "",
  required = false,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  step,
  errorMessage,
  ...props
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputClasses = `${styles.input} ${className} 
    ${fullWidth ? styles.fullWidth : ""} 
    ${disabled ? styles.disabled : ""}`.trim();

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        min={min}
        max={max}
        step={step}
        className={inputClasses}
        {...props}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default Input;

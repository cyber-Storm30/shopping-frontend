import React, { useState } from "react";
import { useStyles } from "./Styles";
import Error from "../Error";
import { useEffect } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const { otherError, name, error, setError, ...inputProps } = props;

  const validate = (value, name) => {
    if (name === "phonenumber") {
      let pattern = /^[7-9][0-9]{9}$/;
      if (!pattern.test(value)) {
        setError(true);
      } else {
        setError(false);
      }
    } else if (name === "password") {
      let pattern = /(?=.{8,})((?=.*\d)|(?=.*[!@#$%^"]))/;
      if (!pattern.test(value)) {
        setError(true);
      } else {
        setError(false);
      }
    } else if (name === "confirmpassword") {
      if (inputProps?.password !== inputProps?.value) {
        setError(true);
      } else {
        setError(false);
      }
    } else if (name === "username") {
      let pattern = /^[a-zA-Z ]*$/;
      if (!pattern.test(value)) {
        setError(true);
      } else {
        setError(false);
      }
    } else if (name === "email") {
      let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!pattern.test(value)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  useEffect(() => {
    if (inputProps?.value?.length !== 0) {
      setTouched(true);
    }
    if (inputProps?.value?.length === 0) {
      setTouched(false);
    }
  }, [inputProps.value]);

  const handleBlur = (e) => {
    if (inputProps?.value?.length !== 0) {
      setTouched(true);
      if (setError) validate(inputProps.value, name);
    }
    if (inputProps?.value?.length === 0) {
      setTouched(false);
    }
    setFocused(false);
  };

  const handleFocus = (e) => {
    setFocused(true);
  };

  useEffect(() => {
    if (inputProps.value?.length === 0) {
      setTouched(false);
    }
  }, [inputProps.value]);

  const classes = useStyles({ name, error });

  return (
    <div className={classes.container}>
      <div className={classes.inputWrapper}>
        <input
          type={inputProps.type}
          name={name}
          value={inputProps.value}
          onChange={inputProps.onChange}
          placeholder={inputProps.placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          focused={focused.toString()}
          className={`${classes.input} ${
            name === "password" || name === "confirmpassword"
              ? classes.passwordText
              : null
          }`}
          required={inputProps.required}
        />
        <div style={{ cursor: "pointer" }} className={classes.eyeWrapper}>
          {(name === "password" || name === "confirmpassword") && touched
            ? inputProps.eye
            : null}
        </div>
      </div>

      <div className={classes.errorWrapper}>
        {focused && !error ? (
          <Error text={inputProps.helperText} color="#9D9D9D" />
        ) : null}
        {error && <Error text={inputProps.errorMessage} color="red" />}
      </div>
    </div>
  );
};

export default Input;

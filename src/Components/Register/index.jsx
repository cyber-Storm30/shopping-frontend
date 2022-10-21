import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Text from "../Shared/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { signupStart, signupSuccess } from "../../redux/Actions/auth";
import { useDispatch } from "react-redux";
import { axiosClient } from "../../Services/apiClient";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [showPassord, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [signinError, setSignInError] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const classes = useStyles({ disabled });
  useEffect(() => {
    if (
      !nameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      values.username.length > 0 &&
      values.email.length > 0 &&
      values.password.length > 0 &&
      values.confirmpassword.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    emailError,
    passwordError,
    confirmPasswordError,
    nameError,
    values.username,
    values.email,
    values.password,
    values.confirmpassword,
  ]);

  useEffect(() => {
    if (values.username.length === 0) {
      setNameError(false);
    }
    if (values.email.length === 0) {
      setEmailError(false);
    }
    if (values.password.length === 0) {
      setPasswordError(false);
    }
    if (values.confirmpassword.length === 0) {
      setConfirmPasswordError(false);
    }
  }, [values.username, values.email, values.password, values.confirmpassword]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({
      username: values.username,
      email: values.email,
      password: values.password,
    });
    // dispatch(signupStart(values));
    try {
      const res = await axiosClient.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      console.log(res);
      setSignInSuccess(true);
    } catch (err) {
      setSignInError(true);
      console.log(err);
    }
  };

  return (
    <div className={classes.register}>
      {!signInSuccess ? (
        <div className={classes.formWrapper}>
          <h3>Register</h3>
          <form className={classes.form} onSubmit={onSubmit}>
            <Text
              onChange={onChange}
              value={values.username}
              name="username"
              type="text"
              placeholder="Username"
              errorMessage="Username cannot contain numbers"
              error={nameError}
              setError={setNameError}
            />
            <Text
              onChange={onChange}
              value={values.email}
              name="email"
              type="text"
              placeholder="Enter your Email Address"
              errorMessage="Not a valid email format"
              error={emailError}
              setError={setEmailError}
            />
            <Text
              eye={
                !showPassord ? (
                  <VisibilityIcon
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                )
              }
              onChange={onChange}
              value={values.password}
              name="password"
              type={showPassord ? "text" : "password"}
              placeholder="Create Password"
              errorMessage="Password too weak"
              error={passwordError}
              setError={setPasswordError}
            />
            <Text
              eye={
                !showConfirmPassword ? (
                  <VisibilityIcon
                    onClick={() => {
                      setShowConfirmPassword(true);
                    }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      setShowConfirmPassword(false);
                    }}
                  />
                )
              }
              onChange={onChange}
              password={values.password}
              value={values.confirmpassword}
              name="confirmpassword"
              type={showConfirmPassword ? "text" : "password"}
              errorMessage="Passwords do not match"
              placeholder="Confirm Password"
              error={confirmPasswordError}
              setError={setConfirmPasswordError}
            />
            <button
              type="submit"
              className={classes.button}
              disabled={disabled}
            >
              Sign In
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              Already a user?
              <div
                className={classes.signButton}
                onClick={() => {
                  navigate("/login");
                }}
              >
                LogIn
              </div>
            </div>
            {signinError && (
              <p style={{ color: "red" }}>Something went wrong</p>
            )}
          </form>
        </div>
      ) : (
        <div className={classes.successSignUp}>
          <p className={classes.text}>
            You have succesfully signed in. Please login to continue.
          </p>
          <button
            className={classes.redirect}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Text from "../Shared/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
import { loginStart } from "../../redux/Actions/auth";
import { useAuth } from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassord, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const loginError = useSelector((state) => state.auth.loginError);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const classes = useStyles({ disabled });

  useEffect(() => {
    if (!emailError && values.email.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailError, values.email]);

  useEffect(() => {
    if (values.email.length === 0) {
      setEmailError(false);
    }
  }, [values.email]);

  if (useAuth() === true) {
    return <Navigate to="/home" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart(values));
  };

  return (
    <div className={classes.login}>
      <div className={classes.formWrapper}>
        <h3>Login</h3>
        <form className={classes.form} onSubmit={onSubmit}>
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
            placeholder="Enter your Password"
          />
          {isFetching ? (
            <CircularProgress sx={{ color: "black" }} />
          ) : (
            <button
              type="submit"
              className={classes.button}
              disabled={disabled}
            >
              Login
            </button>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            New to this site?
            <div
              className={classes.signButton}
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign In
            </div>
          </div>
          {loginError && (
            <p style={{ color: "red" }}>
              Invalid combination of email and password
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./Styles";
import CurrencyFormat from "react-currency-format";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cart);

  const total = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const gst = (total * 0.02).toFixed(2);

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert severity="error">Please login to continue.</Alert>
      </Snackbar>
      <div className={classes.orderSummary}>
        <h1>Order Summary</h1>
        <div className={classes.container}>
          <p>Subtotal</p>
          <p>
            <CurrencyFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </p>
        </div>
        <div className={classes.container}>
          <p>Estimated Shipping</p>
          <p>₹65</p>
        </div>
        <div className={classes.container}>
          <p>Additional Tax</p>
          <p>₹{gst}</p>
        </div>
        <div className={classes.container}>
          <h3>Total</h3>
          <h3>
            <CurrencyFormat
              value={parseFloat(total) + parseFloat(65) + parseFloat(gst)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </h3>
        </div>
        <button
          className={classes.button}
          onClick={
            user
              ? handleCheckOut
              : handleClick({
                  vertical: "top",
                  horizontal: "center",
                })
          }
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default OrderSummary;

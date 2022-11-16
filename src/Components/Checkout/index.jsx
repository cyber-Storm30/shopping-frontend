import React, { useState } from "react";
import Header from "./Header";
import { useStyles } from "./Styles.jsx";
import ShippingDetails from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import Payment from "./Payment";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { pixToVh, pixToVw } from "../../Utils/pixToRem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/Actions/cart";

const Checkout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const initialState = {
    address: "",
    city: "",
    pincode: "",
    phonenumber: "",
    country: "",
    state: "",
  };
  const [phoneError, setPhoneError] = useState(false);
  const [data, setData] = useState(initialState);
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    navigate("/products");
    dispatch(clearCart());
  };

  const PageRender = () => {
    if (step === 0) {
      return (
        <ShippingDetails
          data={data}
          setData={setData}
          step={step}
          setStep={setStep}
          phoneError={phoneError}
          setPhoneError={setPhoneError}
        />
      );
    } else if (step === 1) {
      return (
        <ConfirmOrder
          data={data}
          setData={setData}
          step={step}
          setStep={setStep}
          setOpen={setOpen}
        />
      );
    } else return <Payment />;
  };
  return (
    <div className={classes.checkout}>
      {/* <Header page={step} setPage={setStep} /> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "none",
            width: 500,
            height: 200,
            outline: "none",
            padding: 40,
            borderRadius: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            Your order have been succesfully placed
          </h3>

          <button
            onClick={handleClose}
            style={{
              border: "none",
              outline: "none",
              width: pixToVw(150),
              height: pixToVw(50),
              backgroundColor: "lightgray",
              borderRadius: 10,
              marginTop: 20,
              cursor: "pointer ",
            }}
          >
            Continue Shopping
          </button>
        </div>
      </Modal>
      <div>{PageRender()}</div>
    </div>
  );
};

export default Checkout;

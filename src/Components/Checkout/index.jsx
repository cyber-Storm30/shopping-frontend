import React, { useState } from "react";
import Header from "./Header";
import { useStyles } from "./Styles.jsx";
import ShippingDetails from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import Payment from "./Payment";

const Checkout = () => {
  const classes = useStyles();
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
        />
      );
    } else return <Payment />;
  };
  return (
    <div className={classes.checkout}>
      <Header page={step} setPage={setStep} />
      <div>{PageRender()}</div>
    </div>
  );
};

export default Checkout;

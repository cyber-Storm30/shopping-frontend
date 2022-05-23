import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Text from "../../Shared/Input";

const ShippingDetails = (props) => {
  const [disabled, setDisabled] = useState(true);
  const classes = useStyles({ disabled });
  const onChange = (e) => {
    props.setData({ ...props.data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (
      props.data.address &&
      props.data.city &&
      props.data.pincode &&
      !props.phoneError &&
      props.data.phonenumber &&
      props.data.country &&
      props.data.state
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [props.data, props.phoneError]);

  const handlePageChange = () => {
    props.setStep((prev) => prev + 1);
  };

  return (
    <div className={classes.shipping}>
      <h3>Shipping Details</h3>
      <div className={classes.form}>
        <Text
          placeholder="Address"
          name="address"
          onChange={onChange}
          value={props.data.address}
        />
        <Text
          name="city"
          placeholder="City"
          onChange={onChange}
          value={props.data.city}
        />
        <Text
          placeholder="Pin Code"
          name="pincode"
          onChange={onChange}
          value={props.data.pincode}
        />
        <Text
          placeholder="Phone Number"
          onChange={onChange}
          value={props.data.phonenumber}
          name="phonenumber"
          type="text"
          errorMessage="Not a valid phone number"
          error={props.phoneError}
          setError={props.setPhoneError}
        />
        <Text
          name="country"
          placeholder="County"
          onChange={onChange}
          value={props.data.country}
        />
        <Text
          placeholder="State"
          name="state"
          onChange={onChange}
          value={props.data.state}
        />
        <button onClick={handlePageChange} disabled={disabled}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShippingDetails;

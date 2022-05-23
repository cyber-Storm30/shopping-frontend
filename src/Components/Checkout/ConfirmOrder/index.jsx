import React from "react";
import { useStyles } from "./Styles.jsx";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import OrderSummary from "../../CartPage/OrderSummary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ConfirmOrder = ({ data, setData, step, setStep }) => {
  const classes = useStyles();
  const user = useSelector((s) => s.auth.user);
  const cart = useSelector((s) => s.cart.cart);

  const handleSetStep = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <div className={classes.confirmOrderWrapper}>
      <div className={classes.confirmOrder}>
        <div className={classes.shippingInfo}>
          <ArrowBackIcon onClick={handleSetStep} className={classes.arrow} />
          <h1>Shipping Info</h1>
          <div className={classes.shippingDetails}>
            <p>Name: {user?.username}</p>
            <p>Phone: {data?.phonenumber}</p>
            <p>Address: {data?.address}</p>
          </div>
        </div>
        <div className={classes.cartItemsWrapper}>
          <h1>Your cart Items</h1>
          <div className={classes.cartItems}>
            {cart?.map((item, id) => (
              <CartItem
                key={id}
                title={item.title}
                price={item.price}
                _id={item._id}
                img={item.img}
                quantity={item.quantity}
                stock={item.stock}
              />
            ))}
          </div>
        </div>
      </div>
      <OrderSummary />
    </div>
  );
};

export default ConfirmOrder;

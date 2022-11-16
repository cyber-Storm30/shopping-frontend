import React from "react";
import { useStyles } from "./Styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import OrderSummary from "../../CartPage/OrderSummary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { clearCart } from "../../../redux/Actions/cart.js";
import { axiosClient } from "../../../Services/apiClient.js";

const ConfirmOrder = ({ data, setData, step, setStep, setOpen, address }) => {
  const classes = useStyles();
  const user = useSelector((s) => s.auth.user);
  const cart = useSelector((s) => s.cart.cart);

  const handleSetStep = () => {
    setStep((prev) => prev - 1);
  };

  const totalAmt = cart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  const gst = (totalAmt * 0.02).toFixed(2);
  const finalAmt = parseFloat(totalAmt) + parseFloat(65) + parseFloat(gst);

  const order = {};

  const handleSubmit = async () => {
    setOpen(true);
    try {
      const res = await axiosClient.post("/order/createOrder", {
        userId: user._id,
        products: cart,
        amount: finalAmt,
        address: data,
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
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
      <OrderSummary text="Place order" onPress={handleSubmit} />
    </div>
  );
};

export default ConfirmOrder;

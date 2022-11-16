import React from "react";
import Navbar from "../Shared/Navbar";
import CartItem from "./CartItem";
import { useStyles } from "./Styles";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div className={classes.order}>
      <h1 className={classes.title}>Your Bag</h1>
      <div className={classes.orders}>
        <div className={classes.orderItems}>
          {cartItems?.map((item, id) => (
            <CartItem
              key={id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              size={item.size}
              _id={item._id}
              img={item.img}
              quantity={item.quantity}
              stock={item.stock}
            />
          ))}
        </div>
        {cartItems?.length > 0 ? (
          <OrderSummary
            onPress={() => {
              navigate("/checkout");
            }}
          />
        ) : (
          <div className={classes.emptyCart}>
            <h3>Opps!!! You don't have anything in your cart.</h3>
            <button
              className={classes.button}
              onClick={() => {
                navigate("/products");
              }}
            >
              Go to Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

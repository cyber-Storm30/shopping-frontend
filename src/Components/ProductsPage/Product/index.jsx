import React, { useState } from "react";
import { useStyles } from "./Styles";
import image from "../../../Assets/Products/p1.webp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { addToCart, clearCart } from "../../../redux/Actions/cart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const Product = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${props.id}`);
  };

  return (
    <div className={classes.product} onClick={handleNavigate}>
      <div className={classes.imageWrapper}>
        <img src={props.image} className={classes.image} />
      </div>
      <div className={classes.desc}>
        <div className={classes.hoverWrapper}>
          <div className={classes.titleWrapper}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.subtitle}>{props.subtitle}</p>
          </div>
          {/* <div className={classes.addWrapper} onClick={handleAddToCart}>
            <div className={classes.add}>
              <ShoppingBagIcon className={classes.bag} />
              <p className={classes.addText}>Add to bag</p>
            </div>
          </div> */}
        </div>
        <p className={classes.price}>
          <CurrencyFormat
            value={props.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </p>
      </div>
    </div>
  );
};

export default Product;

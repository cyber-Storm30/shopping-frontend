import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

const CartItem = (props) => {
  const classes = useStyles();
  let quantity = props.quantity;
  const { size, ...product } = props;
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(props.price * quantity);
  }, [quantity]);

  return (
    <div className={classes.cartItem}>
      <div className={classes.leftWrapper}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={props.img}
            alt="order item"
            onClick={() => {
              navigate(`/products/${props._id}`);
            }}
          />
        </div>
        <div className={classes.details}>
          <h4 className={classes.title}>
            Product Name:<p className={classes.subtitle}>{props.title}</p>
          </h4>
        </div>
      </div>
      <div className={classes.total}>
        <h3 className={classes.amount}>
          Total:
          <p className={classes.subamount}>
            <CurrencyFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </p>
        </h3>
      </div>
    </div>
  );
};

export default CartItem;

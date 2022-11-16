import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import image from "../../../Assets/Products/p1.webp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/Actions/cart";
import CurrencyFormat from "react-currency-format";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const OrderItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let quantity = props.quantity;
  const { size, ...product } = props;
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(props.price * quantity);
  }, [quantity]);
  const handleAddtoCart = () => {
    if (quantity < props.stock) {
      dispatch(addToCart(props, props._id, size, quantity + 1));
    }
  };

  const hanldeDeleteFromCart = () => {
    if (quantity > 1) {
      dispatch(addToCart(props, props._id, size, quantity - 1));
    } else {
      dispatch(removeFromCart(props));
    }
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(props));
  };

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
          <h4 className={classes.title}>
            Product Details:
            <p className={classes.subtitle}>{props.subtitle}</p>
          </h4>
          <h4 className={classes.title}>
            Product Id:
            <p className={classes.subtitle}>{props._id}</p>
          </h4>
          {/* <h4 className={classes.title}>
            Size:<p className={classes.subtitle}>{props.size}</p>
          </h4> */}
          <h4 className={classes.title}>
            Price:
            <p className={classes.subtitle}>
              <CurrencyFormat
                value={props.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </p>
          </h4>
          {/* <button
            className={classes.removeButton}
            onClick={handleRemoveFromCart}
          >
            Remove from cart
          </button> */}
        </div>
      </div>
      <div className={classes.total}>
        {/* <div className={classes.counter}>
          {quantity === 1 ? (
            <IconButton onClick={hanldeDeleteFromCart}>
              <DeleteIcon className={classes.icon} sx={{ color: "red" }} />
            </IconButton>
          ) : (
            <IconButton onClick={hanldeDeleteFromCart}>
              <RemoveIcon className={classes.icon} />
            </IconButton>
          )}
          {quantity}
          <IconButton onClick={handleAddtoCart}>
            <AddIcon className={classes.icon} />
          </IconButton>
        </div> */}
        {/* <h3 className={classes.amount}>
          Total:
          <p className={classes.subamount}>
            <CurrencyFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </p>
        </h3> */}
      </div>
    </div>
  );
};

export default OrderItem;

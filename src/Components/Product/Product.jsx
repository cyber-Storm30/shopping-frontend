import React, { useState } from "react";
import { useStyles } from "./Styles";
import image from "../../Assets/Products/p1.webp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Product = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={classes.product}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div>
        <img src={image} className={classes.image} />
      </div>
      <div className={classes.desc}>
        <div
          className={classes.hoverWrapper}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {!hover && (
            <div className={classes.titleWrapper}>
              <p className={classes.title}>Dillinger</p>
              <p className={classes.subtitle}>Stripped cotton t-shirt</p>
            </div>
          )}

          {hover && (
            <div className={classes.addWrapper}>
              <div className={classes.add}>
                <ShoppingBagIcon />
                <p className={classes.addText}>Add to bag</p>
              </div>
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <h4>Sizes:-</h4>
          <p>uk6</p>
          <p>uk7</p>
          <p>uk8</p>
          <p>uk9</p>
        </div>

        <p className={classes.price}>Rs. 1949</p>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Styles";

const Showcase = ({ title, images }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div className={classes.showcase}>
      <p className={classes.title}>{title}</p>
      <div className={classes.container} onClick={handleClick}>
        {images.map((image, id) => (
          <div key={id}>
            <img src={image} className={classes.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;

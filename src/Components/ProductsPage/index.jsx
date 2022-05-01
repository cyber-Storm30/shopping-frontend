import React from "react";
import { useStyles } from "./Styles";
import Page1 from "./ProductFeed";
import Filters from "./Filters";

const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.products}>
      <Filters />
      <Page1 />
    </div>
  );
};

export default Products;

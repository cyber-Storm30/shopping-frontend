import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../../Components/Product/Product";
import { Grid } from "@mui/material";
import { useStyles } from "./Styles";
import Page1 from "../../Components/ProductFeed/Page1";

const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.products}>
      <Navbar />
      <Page1 />
    </div>
  );
};

export default Products;

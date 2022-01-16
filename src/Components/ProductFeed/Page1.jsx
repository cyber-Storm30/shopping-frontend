import React from "react";

import Product from "../../Components/Product/Product";
import { Grid } from "@mui/material";
import { useStyles } from "./Styles";

const Page1 = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid} spacing={4}>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
      <Grid item lg={4} xl={3}>
        <Product />
      </Grid>
    </Grid>
  );
};

export default Page1;

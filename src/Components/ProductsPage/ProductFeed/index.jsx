import React, { useEffect, useState } from "react";
import Product from "../Product";
import { useStyles } from "./Styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../redux/Actions/products";
import { useSelector } from "react-redux";
import Loader from "../../Shared/Loader";

const Page1 = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isFetching = useSelector((s) => s.products.isFetching);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={classes.feed}>
          {products?.map((product, id) => (
            <Product
              key={id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              size={product.size}
              id={product._id}
              image={product.img}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Page1;

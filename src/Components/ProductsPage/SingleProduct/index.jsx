import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import { addToCart, clearCart } from "../../../redux/Actions/cart";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../../Services/apiClient";
import Loader from "../../Shared/Loader";
import CurrencyFormat from "react-currency-format";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const SingleProduct = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XS");

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const dispatch = useDispatch();

  const productId = useParams();

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`/product/${productId.id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const handleAddProduct = () => {
    if (product?.stock > 0)
      dispatch(addToCart(product, product._id, size, quantity));
    // console.log(product);
    dispatch(addToCart(product, product._id, size, quantity));
  };

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert severity="error">Item out of stock!</Alert>
      </Snackbar>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.singleProduct}>
          <>
            <div className={classes.left}>
              <img src={product?.img} className={classes.image} />
            </div>
            <div className={classes.right}>
              <h1>{product?.title}</h1>
              <h2>{product?.subtitle}</h2>
              <h3>{product?.desc}</h3>
              <h1>
                <CurrencyFormat
                  value={product?.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </h1>
              {product?.stock > 0 ? (
                <h3>Status: In Stock</h3>
              ) : (
                <h3>
                  Status: <span style={{ color: "red" }}>Out of Stock</span>
                </h3>
              )}
              <div className={classes.counterWrapper}>
                <div className={classes.counter}>
                  <IconButton
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      }
                    }}
                  >
                    <RemoveIcon className={classes.icon} />
                  </IconButton>
                  <div className={classes.counterText}>{quantity}</div>
                  <IconButton
                    onClick={
                      product?.stock > 0
                        ? () => {
                            if (quantity < product.stock)
                              setQuantity((prev) => prev + 1);
                          }
                        : handleClick({
                            vertical: "top",
                            horizontal: "center",
                          })
                    }
                  >
                    <AddIcon className={classes.icon} />
                  </IconButton>
                </div>
                {/* <Select
                  className={classes.select}
                  value={size}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="XS">XS</MenuItem>
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                </Select> */}
              </div>
              <button
                className={classes.button}
                onClick={
                  product?.stock > 0
                    ? handleAddProduct
                    : handleClick({
                        vertical: "top",
                        horizontal: "center",
                      })
                }
              >
                Add to cart
              </button>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

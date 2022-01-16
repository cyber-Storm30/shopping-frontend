import React from "react";
import { useStyles } from "./Styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  const handleGoback = () => {
    navigate("/");
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <h1 className={classes.title} onClick={handleGoback}>
          SHOPPING
        </h1>
        <div className={classes.categories}>
          <p className={classes.categoriesText} onClick={handleClick}>
            Men
          </p>
          <p className={classes.categoriesText} onClick={handleClick}>
            Women
          </p>
          <p className={classes.categoriesText} onClick={handleClick}>
            Kids
          </p>
        </div>
      </div>
      <div className={classes.navbarRight}>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <input
            className={classes.input}
            type="text"
            placeholder="Search for products,brands and more"
          />
        </div>
        <PersonIcon className={classes.searchIcon} />
        <FavoriteBorderIcon className={classes.searchIcon} />
        <ShoppingBagIcon className={classes.searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;

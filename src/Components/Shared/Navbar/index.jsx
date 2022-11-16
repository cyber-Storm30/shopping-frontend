import React, { forwardRef } from "react";
import { useStyles } from "./Styles";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Actions/auth";
import { useLocation } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { pixToVw } from "../../../Utils/pixToRem";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  const cartSize = useSelector((state) => state.cart.cart);

  const StyledTooltip = styled((props) => (
    <Tooltip
      leaveDelay={500}
      classes={{ popper: props.className }}
      {...props}
    />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      padding: `${pixToVw(15)} ${pixToVw(50)} ${pixToVw(50)} ${pixToVw(10)}`,
      maxWidth: 500,
      backgroundColor: "#bfbfbf",
    },
  });

  const handleClick = () => {
    navigate("/products");
  };
  const handleGoback = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <h1 className={classes.title} onClick={handleGoback}>
          SMART FARMING
        </h1>

        {pathname !== "/" && pathname !== "/register" ? (
          <div className={classes.categories}>
            <p className={classes.categoriesText} onClick={handleClick}>
              Crop Shop
            </p>
          </div>
        ) : null}
      </div>
      {pathname !== "/" && pathname !== "/register" ? (
        <div className={classes.navbarRight}>
          <div className={classes.search}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.input}
              type="text"
              placeholder="Search for crops"
            />
          </div>
          <StyledTooltip
            className={classes.toolTip}
            arrow
            title={
              <>
                <div className={classes.profileToolTip}>
                  <button className={classes.tooltipButton}>Pofile</button>
                  <button
                    onClick={() => {
                      navigate("/orders");
                    }}
                    className={classes.tooltipButton}
                  >
                    Orders
                  </button>
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className={classes.tooltipButton}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className={classes.tooltipButton}
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Login
                    </button>
                  )}
                </div>
              </>
            }
          >
            <IconButton>
              <PersonIcon className={classes.searchIcon} />
            </IconButton>
          </StyledTooltip>
          {/* <IconButton>
            <FavoriteBorderIcon className={classes.searchIcon} />
          </IconButton> */}
          <IconButton
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Badge badgeContent={cartSize?.length} color="secondary">
              <ShoppingBagIcon className={classes.searchIcon} />
            </Badge>
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

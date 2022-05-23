/*eslint no-unused-vars:*/
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { pixToVh, pixToVw } from "../../../Utils/pixToRem";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckIcon from "@mui/icons-material/Check";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Header = ({ page }) => {
  const [step, setStep] = useState({
    step1: {
      bgColor: "#0EC99E",
      color: "white",
    },
    step2: {
      bgColor: "#E3FFF9",
      color: "#0EC99E",
    },
    step3: {
      bgColor: "#E3FFF9",
      color: "#0EC99E",
    },
  });

  useEffect(() => {
    if (page === 0) {
      setStep({
        ...step,
        step2: {
          bgColor: "#E3FFF9",
          color: "#0EC99E",
        },
      });
    }
    if (page === 1) {
      setStep({
        ...step,
        step2: {
          bgColor: "#0EC99E",
          color: "white",
        },
        step3: {
          bgColor: "#E3FFF9",
          color: "#0EC99E",
        },
      });
    }
    if (page === 2) {
      setStep({
        ...step,
        step2: {
          bgColor: "#0EC99E",
          color: "white",
        },
        step3: {
          bgColor: "#0EC99E",
          color: "white",
        },
      });
    }
  }, [page]);

  const useStyles = makeStyles({
    header: {
      display: "flex",
    },
    bar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: pixToVh(20),
    },
    barContainer: {
      display: "flex",
    },
    barCircleWrapper: {
      display: "flex",
      alignItems: "center",
    },
    barCircle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: pixToVw(38),
      height: pixToVh(40),
      borderRadius: "50%",
      border: "1px solid #0EC99E80",
      fontFamily: "'Poppins', sans-serif;",
      fontWeight: "400",
      fontSize: pixToVw(16),
    },
    barLine: {
      width: pixToVw(600),
      height: pixToVh(4),
      backgroundColor: "#808080",
    },
    one: {
      backgroundColor: step?.step1?.bgColor,
      color: step.step1?.color,
    },
    two: {
      backgroundColor: step?.step2?.bgColor,
      color: step.step2?.color,
    },
    three: {
      backgroundColor: step?.step3?.bgColor,
      color: step.step3?.color,
    },
    title: {
      fontFamily: "'Poppins', sans-serif;",
      fontWeight: "400",
      fontSize: pixToVw(14),
      color: "#666666",
    },
    barText: {
      display: "flex",
      gap: pixToVw(500),
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.bar}>
        <div className={classes.barContainer}>
          <div className={classes.barCircleWrapper}>
            {/* <div className={`${classes.barCircle} ${classes.one}`}>1</div> */}
            <LocalShippingIcon />
            <div className={`${classes.barLine} }`}></div>
          </div>

          <div className={classes.barCircleWrapper}>
            {/* <div className={`${classes.barCircle} ${classes.two}`}>2</div> */}
            <CheckIcon />
            <div className={`${classes.barLine} }`}></div>
          </div>

          <div className={classes.barCircleWrapper}>
            {/* <div className={`${classes.barCircle} ${classes.three}`}>3</div> */}
            <AccountBalanceIcon />
          </div>
        </div>
        <div className={classes.barText}>
          <p className={classes.title}>Shipping Details</p>
          <p className={classes.title}>Confirm Order</p>
          <p className={classes.title} style={{ marginLeft: pixToVw(40) }}>
            Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  confirmOrderWrapper: {
    width: "100vw",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    paddingLeft: pixToVw(100),
    position: "relative",
    gap: pixToVw(40),
  },
  confirmOrder: {
    display: "flex",
    flexDirection: "column",
    gap: pixToVw(50),
    paddingTop: pixToVw(50),
  },
  shippingInfo: {
    display: "flex",
    flexDirection: "column",
    gap: pixToVw(20),
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  arrow: {
    position: "absolute",
    top: pixToVw(-20),
    left: pixToVw(20),
    fontSize: pixToVw(52) + "!important",
    cursor: "pointer",
  },
  shippingDetails: {
    display: "flex",
    flexDirection: "column",
    gap: pixToVw(10),
  },
  cartItemsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: pixToVw(25),
  },
  cartItems: {
    display: "flex",
    flexDirection: "column",
    gap: pixToVw(20),
  },
});

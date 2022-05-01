import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  order: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: pixToVw(100),
  },
  title: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: pixToVw(44),
    color: "#595959",
    marginTop: pixToVw(20),
  },
  orders: {
    display: "flex",
    width: "100%",
    height: "max-content",
    gap: pixToVw(30),
    paddingTop: pixToVw(50),
  },
  orderItems: {
    display: "flex",
    paddingLeft: pixToVw(100),
    flexDirection: "column",
    gap: pixToVw(50),
  },
  emptyCart: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: pixToVw(100),
    gap: pixToVw(30),
    // backgroundColor: "red",
    "& h3": {
      fontSize: pixToVw(32),
      fontWeight: 500,
      color: "#808080",
    },
  },
  button: {
    width: pixToVw(150),
    height: pixToVw(70),
    border: "2px solid #003399",
    outline: "none",
    borderRadius: pixToVw(10),
    cursor: "pointer",
    backgroundColor: "white",
    fontSize: pixToVw(20),
    "&:hover": {
      transition: "all 0.5s",
      backgroundColor: "#cce6ff",
    },
  },
});

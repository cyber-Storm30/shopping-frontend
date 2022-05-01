import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: pixToVw(1200),
    height: pixToVw(300),
    backgroundColor: "white",
    boxShadow: "0px 0px 25px -2px rgba(143,143,143,1)",
  },
  leftWrapper: {
    width: "max-content",
    display: "flex",
    height: "100%",
    alignItems: "center",
    gap: pixToVw(30),
  },
  imageWrapper: {
    display: "flex",
    alignItems: "center",
    width: pixToVw(230),
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: pixToVw(15),
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: pixToVw(22),
    fontWeight: 600,
    gap: pixToVw(10),
  },
  subtitle: {
    fontSize: pixToVw(18),
    fontWeight: 500,
  },
  total: {
    display: "flex",
    width: pixToVw(300),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: pixToVw(100),
    gap: pixToVw(20),
  },
  counter: {
    display: "flex",
    alignItems: "center",
    gap: pixToVw(10),
    fontSize: pixToVw(24),
  },
  icon: {
    fontSize: `${pixToVw(28)} !important`,
    cursor: "pointer",
  },
  amount: {
    display: "flex",
    alignItems: "center",
    fontSize: pixToVw(28),
    gap: pixToVw(10),
  },
  subamount: {
    fontSize: pixToVw(26),
    fontWeight: 500,
  },
  removeButton: {
    width: pixToVw(150),
    height: pixToVw(45),
    fontSize: pixToVw(16),
    border: "none",
    outline: "none",
    borderRadius: pixToVw(10),
    cursor: "pointer",
    backgroundColor: "#ff0000",
    color: "white",
    "&:hover": {
      transition: "all 0.5s",
      backgroundColor: "#e60000",
    },
  },
});

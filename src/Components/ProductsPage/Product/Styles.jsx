import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  product: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(5),
    width: pixToVw(260),
    boxShadow: "0px 0px 25px -2px rgba(143,143,143,1)",
    "&:hover": {
      transition: "all .5s",
      transform: "scale(1.05)",
    },
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    height: pixToVw(320),
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    cursor: "pointer",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(2),
    paddingLeft: pixToRem(10),
  },
  title: {
    fontSize: pixToVw(20),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    letterSpacing: pixToRem(1.5),
  },
  subtitle: {
    fontSize: pixToVw(12),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "400",
    color: "#525252",
  },
  price: {
    fontSize: pixToVw(16),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
  },
  hoverWrapper: {
    width: "100%",
  },
  addWrapper: {
    display: "flex",
    width: "100%",
    paddingRight: pixToRem(20),
  },
  add: {
    display: "flex",
    height: pixToVh(30),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    cursor: "pointer",
  },
  addText: {
    fontSize: pixToVw(16),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    paddingTop: pixToRem(3),
  },
  bag: {
    fontSize: pixToVw(22) + "!important",
  },
});

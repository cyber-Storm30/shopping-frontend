import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  product: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(5),
    width: "max-content",
  },
  image: {
    width: pixToVw(260),
    height: pixToVh(320),
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
    fontSize: pixToRem(20),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    letterSpacing: pixToRem(1.5),
  },
  subtitle: {
    fontSize: pixToRem(12),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "400",
    color: "#525252",
  },
  price: {
    fontSize: pixToRem(16),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
  },
  hoverWrapper: {
    width: "100%",
  },
  addWrapper: {
    display: "flex",
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
    fontSize: pixToRem(17),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    letterSpacing: pixToRem(1.5),
    paddingTop: pixToRem(3),
  },
});

import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  singleProduct: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingTop: pixToVh(50),
    paddingLeft: pixToVw(100),
    gap: pixToVw(100),
  },
  left: {
    display: "flex",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: pixToVh(10),
    width: pixToVw(800),
    "& h1": {
      fontWeight: 600,
    },
    "& h2": {
      fontWeight: 500,
    },
    "& h3": {
      fontWeight: 400,
    },
  },
  image: {
    width: pixToVw(400),
    objectFit: "cover",
  },
  counterWrapper: {
    display: "flex",
    gap: pixToVw(20),
  },
  counter: {
    display: "flex",
    alignItems: "center",
    gap: pixToVw(10),
  },
  counterText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: pixToVw(40),
    fontSize: pixToVw(24),
    borderRadius: "25%",
    border: "2px solid #bfbfbf",
  },
  icon: {
    fontSize: `${pixToVw(28)} !important`,
    cursor: "pointer",
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
  select: {
    width: pixToVw(120),
  },
});

import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  shipping: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: pixToVw(50),
    paddingTop: pixToVw(30),
    "& h3": {
      fontWeight: 400,
      fontSize: pixToVw(32),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: pixToVw(10),
    "& button": {
      height: pixToVw(50),
      borderRadius: pixToVw(5),
      backgroundColor: (props) => (props.disabled ? "#92A9BD" : "#3399ff"),
      border: "none",
      outline: "none",
      color: "white",
      cursor: (props) => (props.disabled ? "not-allowed" : "pointer"),
      fontSize: pixToVw(18),
      "&:hover": {
        transition: "all 0.5s",
        backgroundColor: (props) => (props.disabled ? "#92A9BD" : "#0059b3"),
      },
    },
  },
});

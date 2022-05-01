import { makeStyles } from "@mui/styles";
import { pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  register: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    paddingTop: pixToVw(70),
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: pixToVw(50),
    backgroundColor: "white",
    height: "fit-content",
    padding: `${pixToVw(30)} ${pixToVw(30)} ${pixToVw(50)}`,
    "& h3": {
      fontWeight: 400,
      fontSize: pixToVw(32),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: pixToVw(42),
  },
  button: {
    width: pixToVw(430),
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
  signButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: pixToVw(70),
    height: pixToVw(40),
    borderRadius: pixToVw(5),
    backgroundColor: "#92A9BD",
    border: "none",
    outline: "none",
    color: "white",
    cursor: "pointer",
    fontSize: pixToVw(14),
    marginLeft: pixToVw(10),
  },
});

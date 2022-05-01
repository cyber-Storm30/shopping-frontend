import { makeStyles } from "@mui/styles";
import { pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(430),
    height: "max-content",
    gap: pixToVw(5),
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingRight: pixToVw(8),
    borderRadius: pixToVw(4),
    border: (props) => (props.error ? "1px solid red" : "1px solid lightgray"),
  },
  input: {
    width: "100%",
    height: "3rem",
    borderRadius: pixToVw(16),
    border: "none",
    outline: "none",
    paddingLeft: pixToVw(10),
    backgroundColor: "white",
    color: "black",
    fontSize: pixToVw(16),
  },
});

import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  orderSummary: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: pixToVw(550),
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px 0px rgba(143,143,143,1)",
    paddingTop: pixToVw(10),
    paddingBlockEnd: pixToVw(30),
    gap: pixToVw(20),
    "& h1": {
      fontWeight: 300,
      textAlign: "center",
      fontSize: pixToVw(40),
    },
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: `0 ${pixToVw(20)}`,
    "& p": {
      fontSize: pixToVw(22),
    },
    "& h3": {
      fontWeight: 500,
      fontSize: pixToVw(32),
    },
  },
  button: {
    width: "70%",
    height: pixToVw(45),
    fontSize: pixToVw(24),
    border: "2px solid #003399",
    outline: "none",
    borderRadius: pixToVw(10),
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    "&:hover": {
      transition: "all 0.5s",
      backgroundColor: "#cce6ff",
    },
  },
});

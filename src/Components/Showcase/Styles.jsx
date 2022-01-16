import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  showcase: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(70),
    paddingTop: pixToRem(40),
    paddingLeft: pixToRem(50),
  },
  title: {
    fontSize: pixToRem(45),
    fontFamily: "'Poppins', sans-serif",
    color: "#525252",
    textTransform: "capitalize",
  },
  container: {
    display: "flex",
    width: "100%",
    gap: pixToRem(50),
    paddingLeft: pixToRem(40),
  },
  image: {
    width: pixToVw(300),
    cursor: "pointer",
  },
});

import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  filters: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: pixToVw(50),
    paddingLeft: pixToVw(30),
  },
  title: {
    fontSize: pixToVw(28),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    letterSpacing: pixToRem(1.5),
  },
  selectWrappers: {
    display: "flex",
    gap: pixToVw(20),
    paddingLeft: pixToVw(50),
  },
  select: {
    width: pixToVw(120),
  },
});

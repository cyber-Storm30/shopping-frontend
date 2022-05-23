import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  checkout: {
    width: "100%",
    height: "100%",
    // backgroundColor: "beige",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: pixToVw(20),
  },
});

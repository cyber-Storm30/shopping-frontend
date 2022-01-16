import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  grid: {
    width: "100%",
    paddingTop: pixToRem(50) + "!important",
    paddingLeft: pixToRem(250) + "!important",
    paddingRight: pixToRem(150) + "!important",
  },
});

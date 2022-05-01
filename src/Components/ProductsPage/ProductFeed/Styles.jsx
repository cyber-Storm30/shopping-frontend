import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  feed: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: pixToVw(40),
    paddingTop: pixToRem(50) + "!important",
    paddingLeft: pixToRem(250) + "!important",
    paddingRight: pixToRem(150) + "!important",
  },
});

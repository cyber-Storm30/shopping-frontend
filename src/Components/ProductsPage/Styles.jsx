import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  products: {
    width: "100%",
    paddingBottom: pixToVw(50),
  },
});

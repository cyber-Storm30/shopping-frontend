import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  home: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(50),
  },
});

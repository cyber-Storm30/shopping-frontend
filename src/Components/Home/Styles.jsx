import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  home: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(50),
    paddingBottom: pixToVh(50),
  },
});

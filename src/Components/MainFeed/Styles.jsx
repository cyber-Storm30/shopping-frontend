import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  mainfeed: { display: "flex", width: "100%" },
  carouselContainer: {
    width: "100%",
  },
  carouselInnerContainer: {
    width: "100%",
    position: "unset",
  },
  image: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
});

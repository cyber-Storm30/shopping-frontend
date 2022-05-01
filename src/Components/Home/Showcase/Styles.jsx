import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../../Utils/pixToRem";

export const useStyles = makeStyles({
  showcase: {
    display: "flex",
    width:"100%",
    flexDirection: "column",
    paddingTop: pixToRem(40),
  },
  title: {
    fontSize: pixToRem(45),
    fontFamily: "'Poppins', sans-serif",
    color: "#525252",
    textTransform: "capitalize",
    marginLeft:pixToVw(20),
  },
  container: {
    display: "flex",
    justifyContent:"space-around",
    width: "100%",
    paddingTop:pixToVw(20),
    // gap: pixToRem(30),
  },
  image: {
    width: pixToVw(300),
    cursor: "pointer",
    "&:hover":{
      transition: "all .5s",
      transform: "scale(1.05)",
    },
  },
});

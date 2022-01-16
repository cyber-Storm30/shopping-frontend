import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: pixToVh(100),
    boxShadow: " 0px 15px 15px 11px rgba(0,0,0,0.055)",
    paddingLeft: pixToRem(50),
    paddingRight: pixToRem(50),
    // backgroundColor: "red",
  },
  title: {
    fontSize: pixToRem(40),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
  },
  navbarLeft: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(100),
    // backgroundColor: "blue",
  },
  categories: {
    display: "flex",
    gap: pixToRem(25),
    cursor: "pointer",
  },
  categoriesText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  },
  navbarRight: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(20),
  },
  search: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(15),
    width: pixToVw(400),
    paddingLeft: pixToRem(10),
    height: pixToVh(48),
    backgroundColor: "#F2F2F2",
  },
  searchIcon: {
    cursor: "pointer !important",
  },
  input: {
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
    backgroundColor: "#F2F2F2",
  },
});

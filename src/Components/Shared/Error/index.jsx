import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  error: {
    fontFamily: "'Poppins', sans-serif;",
    fontWeight: "400",
    fontSize: "0.9rem",
    color: (props) => props.color,
    textAlign: "left",
    marginLeft: "1.2",
  },
});

const Error = ({ text, color }) => {
  const classes = useStyles({ color });

  return <p className={classes.error}>{text}</p>;
};

export default Error;

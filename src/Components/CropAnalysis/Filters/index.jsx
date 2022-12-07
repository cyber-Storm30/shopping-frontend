import React, { useState } from "react";
import { useStyles } from "./Styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Filters = ({ month, setMonth }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setMonth(e.target.value);
  };
  return (
    <div className={classes.filters}>
      <h3 className={classes.title}>Select Month:</h3>
      <div className={classes.selectWrappers}>
        <Select
          className={classes.select}
          name="month"
          value={month}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Month</em>
          </MenuItem>
          <MenuItem value="Jan">Jan</MenuItem>
          <MenuItem value="Feb">Feb</MenuItem>
          <MenuItem value="March">March</MenuItem>
          <MenuItem value="April">April</MenuItem>
          <MenuItem value="May">May</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Filters;

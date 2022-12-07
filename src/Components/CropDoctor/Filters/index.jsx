import React, { useState } from "react";
import { useStyles } from "./Styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Filters = ({ language, setLanguage }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div className={classes.filters}>
      <h3 className={classes.title}>Filter Doctors according to language:</h3>
      <div className={classes.selectWrappers}>
        <Select
          className={classes.select}
          name="language"
          value={language}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Language</em>
          </MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Urdu">Urdu</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="French">French</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Filters;

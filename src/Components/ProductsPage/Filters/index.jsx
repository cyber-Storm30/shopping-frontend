import React, { useState } from "react";
import { useStyles } from "./Styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Filters = () => {
  const classes = useStyles();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "color") {
      setColor(e.target.value);
    }
    if (e.target.name === "size") {
      setSize(e.target.value);
    }
  };
  return (
    <div className={classes.filters}>
      <h3 className={classes.title}>Filter products:</h3>
      <div className={classes.selectWrappers}>
        <Select
          className={classes.select}
          name="color"
          value={color}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Color</em>
          </MenuItem>
          {/* <MenuItem value={10}>Red</MenuItem>
          <MenuItem value={20}>Blue</MenuItem>
          <MenuItem value={30}>yellow</MenuItem> */}
          <MenuItem value="Red">Red</MenuItem>
          <MenuItem value="Blue">Blue</MenuItem>
          <MenuItem value="Yellow">yellow</MenuItem>
        </Select>
        <Select
          className={classes.select}
          name="size"
          value={size}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Size</em>
          </MenuItem>
          <MenuItem value="XS">XS</MenuItem>
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="XL">XL</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Filters;

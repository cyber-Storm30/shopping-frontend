import React from "react";
import MainFeed from "./MainFeed";
import Navbar from "../Shared/Navbar";
import Showcase from "./Showcase";
import { useStyles } from "./Styles";
import image1 from "../../Assets/Showcase/1.webp";
import image2 from "../../Assets/Showcase/2.webp";
import image3 from "../../Assets/Showcase/3.webp";
import image4 from "../../Assets/Showcase/4.webp";
import image5 from "../../Assets/Showcase/5.webp";

const Home = () => {
  const classes = useStyles();
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className={classes.home}>
      <MainFeed />
      <Showcase title="deals of the day" images={images} />
    </div>
  );
};

export default Home;

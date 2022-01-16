import React from "react";
import MainFeed from "../../Components/MainFeed/MainFeed";
import Navbar from "../../Components/Navbar/Navbar";
import Showcase from "../../Components/Showcase/Showcase";
import { useStyles } from "./Styles";
import image1 from "../../Assets/Showcase/1.webp";
import image2 from "../../Assets/Showcase/2.webp";
import image3 from "../../Assets/Showcase/3.webp";
import image4 from "../../Assets/Showcase/4.webp";
import image5 from "../../Assets/Showcase/5.webp";
import Product from "../../Components/Product/Product";

const Home = () => {
  const classes = useStyles();
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className={classes.home}>
      <Navbar />
      <MainFeed />
      <Showcase title="deals of the day" images={images} />
    </div>
  );
};

export default Home;

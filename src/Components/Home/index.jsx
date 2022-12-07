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
import Products from "../ProductsPage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  const images = [image1, image2, image3, image4, image5];
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <img
        src="https://iari.res.in/images/2022/09/23/20200806_124730.jpg"
        style={{ width: "100%", position: "realtive" }}
      />
      <button
        onClick={() => {
          navigate("/products");
        }}
        style={{
          width: "300px",
          height: "100px",
          position: "absolute",
          top: "40%",
          left: "40%",
          backgroundColor: "skyblue",
        }}
      >
        Explore
      </button>
    </div>
  );
};

export default Home;

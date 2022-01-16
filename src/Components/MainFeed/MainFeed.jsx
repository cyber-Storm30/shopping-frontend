import React from "react";
import { useStyles } from "./Styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1 from "../../Assets/Home/c1.webp";
import c2 from "../../Assets/Home/c2.webp";
import c3 from "../../Assets/Home/c3.webp";
import c4 from "../../Assets/Home/c4.webp";
import c5 from "../../Assets/Home/c5.webp";

const MainFeed = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const classes = useStyles();
  return (
    <div className={classes.mainfeed}>
      <div className={classes.carouselContainer}>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          containerClass={classes.carouselInnerContainer}
          itemClass={classes.itemClass}
        >
          <img src={c1} className={classes.image} />
          <img src={c2} className={classes.image} />
          <img src={c3} className={classes.image} />
          <img src={c4} className={classes.image} />
          <img src={c5} className={classes.image} />
        </Carousel>
      </div>
    </div>
  );
};

export default MainFeed;

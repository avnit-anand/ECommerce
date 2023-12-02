import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const items = mainCarouselData.map((item) => (
  <img src={item.image} alt="" role="presentation" className="cursor-pointer" />
));

const MainCarousel = () => (
  <AliceCarousel 
  mouseTracking 
  items={items} 
  controlsStrategy="alternate"
  disableButtonsControls
  autoPlay
  infinite
  autoPlayInterval={1000} />
);

export default MainCarousel;

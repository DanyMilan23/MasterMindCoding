import React from "react";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
    <div>
      <img alt="" src="/mobile_text.jpg" />
    </div>
    <div>
      <img alt="" src="qa_text.jpg" /> 
    </div>
    <div>
      <img alt="" src="support_text.jpg" />
    </div>
    <div>
      <img alt="" src="web_text.jpg" />
    </div>
  </Carousel>
);

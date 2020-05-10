import React, { useState, useEffect }  from "react";
import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => {
  const [source, setSource] = useState(false);
  const [tam, setTam] = useState(400)
  //MediaQuery
  const matches = useMediaQuery("(min-width:960px)");
  useEffect(() => {
    setSource(matches);
  }, [matches]);
  useEffect(() => {
    if(source === true){
      setTam(400);
    }
    else{
      setTam(200);
    }
  }, [source]);
  useEffect(()=>{setTam(400)})

  return(
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} interval={20000} dynamicHeight={true} autoPlay>
      <div>
        <img alt="" src="/mobile_text.jpg"  style={{height:500}}/>
      </div>
      <div>
        <img alt="" src="qa_text.jpg" style={{ height: 500}}/> 
      </div>
      <div>
        <img alt="" src="support_text.jpg" style={{ height:500}}/>
      </div>
      <div>
        <img alt="" src="web_text.jpg" style={{ height:500}}/>  
      </div>
    </Carousel>
  )
};

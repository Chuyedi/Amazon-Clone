import React from 'react'
import classes from "./Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

import {images} from "../../utils/data"


 function CarouselEffects() {
  console.log( images);
  return (
    <>
      <div className={classes.test}>
        <Carousel
        autoPlay = {true}
        infiniteLoop = {true}
        showIndicators = {false}
        showThumbs = {false}
        >
           {
            images?.map((imageItemLink)=>{
              console.log(imageItemLink);
              return(
                <img src={imageItemLink}/>
              )
                
              
            })
           }
        </Carousel>
        <div className={classes.hero__img}></div>
      </div>
    </>
  )
}
export default CarouselEffects;

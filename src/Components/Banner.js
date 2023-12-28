import React from 'react';
import { Carousel } from "@material-tailwind/react";
import b1 from "./assets/b1.png";
import b2 from "./assets/b2.png";
import b3 from "./assets/b3.png"
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Banner = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
      };
  return (
    <div className='banner' style={{height:"30%", width:"100%",marginTop:"5rem"}}>
       <AliceCarousel
             
              autoPlay
              autoPlayInterval="2000"
              infinite
              disableButtonsControls
              disableDotsControls
              responsive={responsive}
            >
               <img
                    src={b1}
                    style={{ width: '100%', maxHeight: '30%', objectFit: 'contain' }}
                    alt="Banner-Image"
                />
                <img
                    src={b2}
                    style={{ width: '100%', maxHeight: '30%', objectFit: 'contain' }}
                    alt="Banner-Image"
                />
                <img
                    src={b3}
                    style={{ width: '100%', maxHeight: '30%', objectFit: 'contain' }}
                    alt="Banner-Image"
                />
       
            </AliceCarousel>

    </div>

  );
}

export default Banner;

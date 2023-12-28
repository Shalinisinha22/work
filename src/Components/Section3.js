import React from 'react';
import Carousel from 'react-grid-carousel';
import p1 from "./assets/products/p1.png"
import p12 from "./assets/p12.png"
import p2 from "./assets/products/p21.png"
import p21 from "./assets/products/p22.png"
import p3 from "./assets/products/p31.png"
import p31 from "./assets/products/p32.png"
import p4 from "./assets/products/p41.png"
import p41 from "./assets/products/p42.png"
import p5 from "./assets/products/p51.png"
import p51 from "./assets/products/p52.png"
import p6 from "./assets/products/p61.png"
import p61 from "./assets/products/p62.png"
import p7 from "./assets/products/p71.png"
import p71 from "./assets/products/p72.png"
import hoodie from "./assets/hoodie.png"

const Section3 = () => {
    const responsive=[
        {
          breakpoint: 800,
          cols: 3,
          rows: 1,
          gap: 10,
          loop: true,
          autoplay: 1000
        }
      ]
  return (
    <div className='section3' style={{marginTop:"4rem"}}>
             <header className="text-center" style={{marginBottom:"2rem"}}>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Recently Viewed</h2>
  
    
      </header>
          <Carousel  responsiveLayout ={responsive} cols={4} rows={1} gap={10} loop={true} autoplay={1000} >
      <Carousel.Item>
        <img width="100%" src={p1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={p2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={p3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={p4} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={p5} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={p6} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={p7} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={hoodie} />
      </Carousel.Item>
     
    
    </Carousel>
    </div>
  );
}

export default Section3;

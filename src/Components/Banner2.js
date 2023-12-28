import React from 'react';
import banner2 from "./assets/Banner2.png"

const Banner2 = () => {
  return (
    <div style={{height:"50%",width:"100%",marginTop:"5rem",display:"flex",justifyContent:"center"}}>
       
      <img className='banner2' src={banner2} alt="banner"style={{height:"50vh",width:"90%"}}></img>
    </div>
  );
}

export default Banner2;

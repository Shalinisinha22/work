import React from 'react';
import banner1 from "./assets/Banner1.png"

const Banner1 = () => {
  return (
    <div style={{height:"40%",width:"100%",backgroundColor:"red",marginTop:"5rem"}}>
       
      <img className='banner1' src={banner1} alt="banner"style={{height:"60vh",width:"100%"}}></img>
    </div>
  );
}

export default Banner1;

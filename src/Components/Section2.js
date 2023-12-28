import React from 'react';
import p1 from "./assets/products/p1.png"
// import p12 from "./assets/products/p12.png"
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


const Section2 = () => {
  return (

    <section class='section2' style={{marginTop:"5%"}}>
    <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Drops</h2>
  
        {/* <p className="mx-auto mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p> */}
      </header>
  
      <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
    
  
      
  
     


        <li  >
        <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
src={p2}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
src={p21}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center"}}>
       Shirt
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900" style={{justifyContent:"center"}}>
      <p className="tracking-wide">Rs 999</p>

      {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
    </div>
  </div>
</a>
        </li>

        <li >
        <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
src={p6}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
src={p61}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center"}}>
 Hoodie
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900" style={{justifyContent:"center"}}>
      <p className="tracking-wide">Rs 1699</p>

      {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
    </div>
  </div>
</a>
        </li>

        <li  >
        <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
src={p4}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
src={p41}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center"}}>
      T-shirt
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900" style={{justifyContent:"center"}}>
      <p className="tracking-wide">Rs 999</p>

      {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
    </div>
  </div>
</a>
        </li>

        <li  >
        <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
src={p5}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
src={p51}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center"}}>
      T-Shirt
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900" style={{justifyContent:"center"}}>
      <p className="tracking-wide">Rs 699</p>

      {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
    </div>
  </div>
</a>
        </li>

        <li  >
        <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
src={p7}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
src={p71}       alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center"}}>
    T-Shirt
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900" style={{justifyContent:"center"}}>
      <p className="tracking-wide">Rs 999</p>

      {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
    </div>
  </div>
</a>
        </li>
      
      </ul>
    </div>
  </section>
  );
}

export default Section2;

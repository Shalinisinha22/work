import React from 'react';
import winter from "./assets/products/p61.png"
import shirts from "./assets/products/p31.png"
import tshirt from "./assets/products/p51.png"
import jeans from "./assets/products/p1.png"
import night from "./assets/night.png"
import trouser from "./assets/trouser.png"
import inner from "./assets/inner.png"
import shoes from "./assets/shoes.png"
import perfume from "./assets/perfume.png"
import over from "./assets/products/p71.png"
import ckali from "./assets/hoodie21.png"
import co from "./assets/products/co.png"



const Categories = () => {

  const caegories=[
    {
      id:1,
      name:"Winter Wear",
      img:winter

  },
  {
    id:2,
    name:"Oversized Edit",
    img:over

},
{
  id:3,
  name:"CKali Luxe",
  img:ckali

},
{
  id:4,
  name:"Shirts",
  img:shirts

},
{
  id:5,
  name:"T-shirts",
  img:tshirt

},
{
  id:6,
  name:"Jeans",
  img:jeans

},
{
  id:7,
  name:"Trousers",
  img:trouser

},
{
  id:8,
  name:"Co-ords",
  img:co

},
{
  id:9,
  name:"Night-Suits & Pyjamas",
  img:night

},
{
  id:10,
  name:"Inner Wear",
  img:inner

},
{
  id:11,
  name:"Shoes",
  img:shoes

},
{
  id:12,
  name:"Perfumes",
  img:perfume

},
]
  return (
    <section>
    <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 category">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">All Categories</h2>
  
        {/* <p className="mx-auto mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
          dicta incidunt est ipsam, officia dolor fugit natus?
        </p> */}
      </header>
  
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
          caegories.map((item)=>(
            <li key={item.id}>
            <a href="#" className="group block overflow-hidden">
              <img
src={item.img}                alt=""
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
    
              <div className="relative bg-white pt-3">
                <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                {item.name}
                </h3>
    
            
              </div>
            </a>
          </li>
          ))
        }
    
{/*   
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
           
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
           
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
            </div>
          </a>
        </li>


        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
          
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
           
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
           
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
          
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
           
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
           
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
  
            <div className="relative bg-white pt-3">
              <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4" style={{textAlign:"center", fontWeight:"500"}}>
                Basic Tee
              </h3>
  
            </div>
          </a>
        </li> */}
      </ul>
    </div>
  </section>
  );
}

export default Categories;

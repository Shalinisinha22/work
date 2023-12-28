import React, { useState } from 'react';
import logo from "./assets/logo.jpg"
import logo1 from "./assets/logonoBg.png"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo2 from "./assets/logo1.jpg"

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-black shadow dark:bg-gray-800" style={{ position: "fixed", top: 0, left: 0, zIndex: 99, width: "100%", backgroundColor: "#06070e"  }}>
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
   



        <div className="flex logo-menu-cont" style={{alignItems:"center", justifyContent:"space-between", width:"60%"}} >
        <a className=" text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#" style={{marginTop:"1rem"}} onClick={toggleMenu}>
            <MenuIcon  style={{fontSize:"2rem"}}></MenuIcon>

              
            </a>
          <a href="#" style={{height:"100%"}}>
            <img className="w-auto h-8 sm:h-9" src={logo} style={{ width:"15rem", height:"7rem"}}  alt="Logo" />
          </a>

          {/* Mobile menu button */}
        
        


           {/* Mobile menu button */}
          {/* {
            !isOpen && 

            <div className="flex lg:hidden">
            <button
              onclick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
               <MenuIcon  style={{fontSize:"2.5rem"}}></MenuIcon>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          }
        </div> */}
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}


        <div
          className={`absolute inset-x-0 z-20 w-full  px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          } menu-cont` }
        >
          <div className="flex flex-col md:flex-row md:mx-10" style={{width:"18rem", justifyContent:"space-around"}}>
        
            {/* <a className={`my-2 ${isOpen? "text-black" :"text-white"} transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`} href="#">
              Shop
            </a>
            <a className={`my-2 ${isOpen? "text-black" :"text-white"} transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`} href="#">
              Contact
            </a> */}
            {/* <a className={`my-2 ${isOpen? "text-black" :"text-white"} transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`} href="#">
              About
            </a> */}
            <a className={`my-2 ${!isOpen? "text-black" :"text-white"} transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`} href="#">
            <PermIdentityIcon style={{fontSize:"1.8rem"}}>
              </PermIdentityIcon> 

              
            </a>
            <a className="relative text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
           <SearchIcon style={{fontSize:"1.8rem"}}></SearchIcon> 

              
            </a>
            <a className="relative text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
            <FavoriteBorderIcon style={{fontSize:"1.8rem"}}></FavoriteBorderIcon>

              
            </a>

            <a className="relative text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
            <ShoppingCartIcon style={{fontSize:"1.8rem"}}></ShoppingCartIcon>

              
            </a>

        
          </div>

          {/* <div className="flex justify-center md:block" style={{flexDirection:"row"}}>
            <a className="relative text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
              <svg className="w-5 h-15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height:"2rem"}}>
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

               <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span> 
            </a>
          
           
          </div> */}
        </div>
      </div>
      {
  !isOpen  &&
       <div className="flex h-screen flex-col justify-between border-e bg-white sidebar" style={{ zIndex:"999", position:"absolute", top:0,left:0,overflow:"scroll"}}>
  <div className="px-4 py-6">
  {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
    Logo
  </span> */}
   <a className=" text-black transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#" style={{marginTop:"1rem"}} onClick={toggleMenu}>
          <AccountCircleIcon style={{height:"2rem", color:"gray"}}></AccountCircleIcon> LOG IN

              
            </a>

            <a className=" text-black transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#" style={{marginLeft:"7rem"}} onClick={toggleMenu}>
           <ClearIcon style={{color:"gray"}}></ClearIcon>

              
            </a>

  <ul className="mt-6 space-y-1">
    <li>
      <a href="" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
        NEW ARRIVALS
      </a>
    </li>


    <li>
      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        MOST TRENDING
      </a>
    </li>
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <span className="text-sm font-medium"> SHOP </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
       

          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
             Sunglasses
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
             Perfumes 
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Shirts
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              T-Shirts
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
             Cargo Pants 
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
             Jeans 
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Bottom Wear
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Co-Ords
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Jackets
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Sweaters
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Hoodie's
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Inner Wear
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
             Night Suits & Pyjamas 
            </a>
          </li>
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Shoes
              
            </a>
          </li>
        </ul>
      </details>
    </li>


    <li>
      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
      TRACK ORDER
      </a>
    </li>

    <li>
      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
      PLACE A RETURN/EXCHANGE REQUEST
      </a>
    </li>

  
    <li>
      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
      CUSTOMER SUPPORT
      </a>
    </li>

    <li>
      <a
        href=""
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
       VISIT STORE
      </a>
    </li>

  
  </ul>
</div>

{/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
  <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
    <img
      alt="Man"
      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      className="h-10 w-10 rounded-full object-cover"
    />

    <div>
      <p className="text-xs">
        <strong className="block font-medium">Eric Frusciante</strong>

        <span> eric@frusciante.com </span>
      </p>
    </div>
  </a>
</div> */}
</div>
}
    </nav>


  );
}

export default Header;

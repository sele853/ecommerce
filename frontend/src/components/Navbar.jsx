import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {

    const [visible , setVisible] = useState(false);

    const {setShowSearch,getCartCount} = useContext(ShopContext);

  return(
    <div className="py-5 flex items-center justify-between font-medium">

        <Link to='/'><img src={assets.logo} className="w-36" alt="website-logo"/></Link>

        <nav className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to="/" className="flex items-center flex-col gap-1">
                <p>HOME</p>
                <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
            </NavLink>   
            <NavLink to="/collection" className="flex items-center flex-col gap-1">
                <p>COLLECTION</p>
                <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
            </NavLink> 
            <NavLink to="/about" className="flex items-center flex-col gap-1">
                <p>ABOUT</p>
                <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
            </NavLink> 
            <NavLink to="/contact" className="flex items-center flex-col gap-1">
                <p>CONTACT</p>
                <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
            </NavLink>   
        </nav>
        <div className="flex items-center gap-6">
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="search Icon" className="w-5 cursor-pointer" />
            <div className="group relative">
                <img src={assets.profile_icon} alt="profile icon" className="w-5 cursor-pointer"/>
                <div className="group-hover:block hidden absolute right-0 pt-4">
                    <div className="flex flex-col bg-slate-100 text-gray-500 rounded gap-2 w-36 py-5 px-3">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>

            <Link to="/cart" className="relative">
               <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart icon"/>
               <p className="absolute right-[-5px] bottom-[-5px] bg-black text-white leading-4 w-4 aspect-square rounded-full text-[8px] text-center">{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 block sm:hidden  cursor-pointer" alt="menu icon" />

        </div>

        {/* sidebar menu for small screen */}

        <div className={`absolute top-0 bottom-0 right-0 bg-white overflow-hidden transition-all ${visible? 'w-full':'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer ">
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back icon" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 border-t  border-gray-200" to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 border-t  border-gray-200" to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 border-t  border-gray-200" to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="pl-6 py-2 border-t border-b border-gray-200" to='/contact'>CONTACT</NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar;

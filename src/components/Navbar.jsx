import { useState } from "react"

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'
import { Button } from "./ui/button";

const Navbar = () => {
  const [toggle, setToggle] = useState( false )
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[30px] h-[50px]"/>
      <ul className="list-none sm:flex hidden justify-end flex-1 items-center">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>
                    {nav.title}
                </a>
                </li>
            ))}
            {/* Render your button as the last item */}
            <li className="font-poppins font-normal cursor-pointer text-[16px] ml-10">
            <Button className="bg-primary text-white  hover:bg-white hover:border-2 hover:text-black">Contact Us</Button>
            </li>
            </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer "> 
          <img src={toggle ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                            </li>
                        ))}
                        {/* Render your button as the last item */}
                        <li className="font-poppins font-normal cursor-pointer text-[16px] mt-2 text-black">
                        <Button className="bg-white text-primary  hover:bg-primary hover:border-2 hover:text-primary">Contact Us</Button>
                        </li>
                     </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
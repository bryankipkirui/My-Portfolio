import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const NavBar = ()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeClass = ({ isActive })=> {
        return isActive ? "text-white py-3 px-2 bg-orange-500/50 rounded-xl text-gray-300" 
                        : 
                        "hover:text-orange-600 py-3 px-2"
    }
    return (
        <>
            <nav className="bg-gray-900/95 max-w-8xl fixed left-0 top-0 right-0 shadow-lg">
                <div className="py-6 px-4 flex justify-between md:justify-around content-center ">
                    <div className="flex"><NavLink 
                        to='/'
                        className="text-gray-300/50 font-bold justify-center content-center hover:text-orange-600"
                    >Bryan</NavLink></div>
                    <div className="hidden m-auto space-x-4 text-gray-300/50 md:flex">
                        <NavLink 
                            to="/"
                            className={activeClass}
                        >Home</NavLink>
                        <NavLink 
                            to="/about"
                            className={activeClass} 
                        >About Me</NavLink>
                        <NavLink 
                            to="/projects"
                            className={activeClass} 
                        >Projects</NavLink>
                    </div>
                    <IoMdMenu
                        className=" text-4xl text-gray-200 cursor-pointer ml-16 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <div
                        className={`absolute md:hidden top-24 left-0 rounded-xl py-8 w-full flex flex-col
                        bg-gray-300 items-center gap-6 font-semibold text-lg z-50 transform
                        transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-90 visible transalte-y-0" : "opacity-0 invisible -translate-y-2"}`}

                    >
                        <NavLink 
                            to="/"
                            className={activeClass}
                            onClick={() => setIsMenuOpen(false)}
                        >Home</NavLink>
                        <NavLink 
                            to="/about"
                            className={activeClass}
                            onClick={() => setIsMenuOpen(false)} 
                        >About Me</NavLink>
                        <NavLink 
                            to="/projects"
                            className={activeClass}
                            onClick={() => setIsMenuOpen(false)} 
                        >Projects</NavLink>
                    </div>

                    <div className="flex">
                        <Link 
                            to="/contact"
                            className="bg-gray-200 px-4 py-3 rounded-lg"
                        >Contact Me
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
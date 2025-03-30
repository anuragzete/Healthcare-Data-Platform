// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
    return (
        <header className="bg-blue-900 fixed w-full z-50 shadow-md">
            <nav className="flex items-center h-[70px] text-white">

                {/* Logo Wrapper */}
                <div className="h-[50px] flex items-center px-[50px]">
                    <a href="/" target="_self" className="cursor-pointer">
                        <img
                            src="Screenshot_2024-04-23_212818-rem.png"
                            alt="Logo"
                            className="h-full"
                        />
                    </a>
                </div>

                {/* Spacer */}
                <div className="flex-1 h-[50px] flex items-center px-[50px]"></div>

                {/* Menu Wrapper */}
                <div className="flex-1 flex justify-end items-center h-[50px] px-[50px]">
                    <div className="flex justify-evenly items-center h-[50px] px-[30px]">
                        <a href="/" target="_self" className="text-white no-underline mx-[20px] text-[22px] hover:text-gray-300 transition-colors">Home</a>
                        <a href="https://www.who.int/news" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-[20px] text-[22px] hover:text-gray-300 transition-colors">News</a>
                        <a href="/details" target="_self" className="text-white no-underline mx-[20px] text-[22px] hover:text-gray-300 transition-colors">Details</a>
                        <a href="/help" target="_self" className="text-white no-underline mx-[20px] text-[22px] hover:text-gray-300 transition-colors">Help</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

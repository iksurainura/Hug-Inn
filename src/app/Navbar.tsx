"use client"; // Add this if using Next.js 13+ in the `app` directory
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative justify-center">
        <div className="px-5 py-6 flex justify-center">
          <ul className="hidden md:flex space-x-4 px-10 py-5 bg-yellow-500 text-black font-semibold text-lg rounded-full transition-all duration-300">
            <div className="md:flex items-center space-x-10 hidden">
                {/* Align logo at the same level as the text */}
              <div className="flex items-center  px-7">
                <Image
                  src="/Photos/hug_in_logo-high-quality.png"
                  alt="Restaurant Logo"
                  width={60} // Adjust width if necessary
                  height={50} // Adjust height if necessary
                  className="object-contain"
                />
              </div>
              <li className="relative group">
                <Link
                  href="/"
                  className="text-black font-bold text-lg transition-all duration-300 ease-in-out
                    hover:text-black/80 relative after:content-[''] after:absolute after:w-full after:h-[2px]
                    after:bg-black after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-center
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/"
                  className="text-black font-bold text-lg transition-all duration-300 ease-in-out
                    hover:text-black/80 relative after:content-[''] after:absolute after:w-full after:h-[2px]
                    after:bg-black after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-center
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  About
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/"
                  className="text-black font-bold text-lg transition-all duration-300 ease-in-out
                    hover:text-black/80 relative after:content-[''] after:absolute after:w-full after:h-[2px]
                    after:bg-black after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-center
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Menu
                </Link>
              </li>
              
              <li className="relative group">
                <Link
                  href="/"
                  className="text-black font-bold text-lg transition-all duration-300 ease-in-out
                    hover:text-black/80 relative after:content-[''] after:absolute after:w-full after:h-[2px]
                    after:bg-black after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-center
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Gallery
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/"
                  className="text-black font-bold text-lg transition-all duration-300 ease-in-out
                    hover:text-black/80 relative after:content-[''] after:absolute after:w-full after:h-[2px]
                    after:bg-black after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-center
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Reservation
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/"
                  className="text-black font-bold text-lg transition-all duration-300 ease-in-out
                    hover:text-black/80 relative after:content-[''] after:absolute after:w-full after:h-[2px]
                    after:bg-black after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-center
                    after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden text-center px-5 py-5">
            <div className="flex items-center justify-center py-5">
              <button onClick={toggleMenu} className="text-black text-lg">
                X
              </button>
            </div>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href="/" className="text-black font-bold text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black font-bold text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black font-bold text-lg">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black font-bold text-lg">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black font-bold text-lg">
                  Reservation
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black font-bold text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

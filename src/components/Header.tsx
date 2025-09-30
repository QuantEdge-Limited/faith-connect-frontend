"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


// Header component renders the top navigation bar for the application
export default function Header() {


  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* Main header container */}
      <div className="header flex justify-between p-4 py-6 h-[70px] top-0 fixed w-[100vw] bg-white border-b border-b-gray-400">
        {/* Left section: Logo */}
        <div className="header-left flex justify-start ps-5">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
        {/* Right section: Navigation links and auth buttons */}
        <div className="header-right justify-around flex">
          {/* Navigation links with animated underline on hover */}
          <div className="header-right-list flex py-1 my-auto">
            {/* Each link uses a span for animated underline effect from center to ends */}
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Products</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Solutions</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Community</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Resources</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Pricing</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Contact</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
            <Link href="/" className="me-4 group relative overflow-hidden"> 
              <span className="relative z-10">Link</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:left-0 transform"></span>
            </Link>
          </div>
          {/* Authentication buttons: Show Log Out if logged in, else Login/Sign Up */}
          <div className="header-right-logs flex py-1 my-auto">
            {isLoggedIn ? (
              <>
                <Link href="/" className="me-4 px-3 py-[2px] bg-gray-200 border border-gray-400 rounded-md">Log Out</Link>
              </>
            ) : (
              <>
                <Link href="/login" className="me-4 px-3 py-[2px] bg-gray-200 border border-gray-400 rounded-md">Login</Link>
                <Link href="/signup" className="me-4 px-3 py-[2px] bg-black text-white rounded-md">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

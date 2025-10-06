

// Import required modules and icons
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bell, Menu, Settings, User } from "lucide-react";


// Props for Header component
// onMenuClick: function to handle mobile menu toggle
interface HeaderProps {
  onMenuClick: () => void;
}

// Header component renders the top navigation bar for the dashboard
export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left section: Mobile menu button and logo */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button (visible on small screens) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          {/* Logo and app name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              Faith Connect
            </h1>
          </div>
        </div>

        {/* Right section: User info and actions */}
        <div className="flex items-center gap-3">
          {/* Notification bell with badge */}
          <Link href={"/notifications"} title='Notification' className="relative w-8 h-8 flex items-center justify-center rounded-full">
            <Bell size={25} width={30} className="text-gray-600 cursor-pointer" />
            <span className='text-white text-sm absolute w-4 h-4 z-10 right-0 top-0 font-bold bg-red-500 rounded-full flex justify-center items-center'>8</span>
          </Link>
          {/* Settings icon */}
          <Settings size={25} width={30} className="text-gray-600 cursor-pointer" />
          {/* User name and role (hidden on small screens) */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-medium text-gray-700">John Doe</span>
            <span className="text-xs text-gray-500">Member</span>
          </div>
          {/* User avatar icon */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}

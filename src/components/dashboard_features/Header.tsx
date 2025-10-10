

// Import required modules and icons
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bell, Menu, Settings, User } from "lucide-react";
import Profile from "./profile";


// Props for Header component
// onMenuClick: function to handle mobile menu toggle
interface HeaderProps {
  onMenuClick: () => void;
}

// Header component renders the top navigation bar for the dashboard
export default function Header({ onMenuClick }: HeaderProps) {
  return (
  <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50 overflow-visible">
      <div className="flex items-center justify-between h-full px-4 max-sm:pr-6">
        {/* Left section: Mobile menu button and logo */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button (visible on small screens) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
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
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 hidden sm:block">
              Faith Connect
            </h1>
          </div>
        </div>

        {/* Right section: User info and actions */}
        <div className="flex items-center gap-3">
          {/* Notification bell with badge */}
          <Link href={"/notifications"} title='Notification' className="relative w-8 h-8 flex items-center justify-center rounded-full">
            <Bell size={25} width={30} className="text-gray-600 dark:text-gray-300 cursor-pointer" />
            <span className='text-white text-sm absolute w-4 h-4 z-10 right-0 top-0 font-bold bg-red-500 rounded-full flex justify-center items-center'>8</span>
          </Link>
          {/* User name and role (hidden on small screens) */}
          <div className="hidden md:flex md:ml-5 flex-col items-end">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Member</span>
          </div>
          {/* User avatar icon */}
          <div className="relative group w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <div className="absolute top-full right-2 mt-1 min-w-[14rem] max-w-[90vw] bg-white dark:bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50 origin-top-right">
              {/* Compact profile card for header hover (keeps hover active when pointer moves between icon and panel) */}
              <Profile compact />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

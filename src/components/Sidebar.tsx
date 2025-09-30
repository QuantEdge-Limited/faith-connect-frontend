import React from "react";
import Link from "next/link";
import { Home, Users, Calendar, BookOpen, Settings, Menu } from "lucide-react";

// Sidebar component renders the vertical navigation menu for the dashboard
export default function Sidebar() {
  return (
  // Main sidebar container
  <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo/Header section */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Faith Connect</h1>
      </div>

      {/* Navigation links section */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {/* Dashboard link */}
          <li>
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* Members link */}
          <li>
            <Link href="/members" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Users className="w-5 h-5" />
              <span>Members</span>
            </Link>
          </li>
          {/* Events link */}
          <li>
            <Link href="/events" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </Link>
          </li>
          {/* Resources link */}
          <li>
            <Link href="/resources" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <BookOpen className="w-5 h-5" />
              <span>Resources</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Settings link at the bottom of the sidebar */}
      <div className="p-4 border-t border-gray-200">
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
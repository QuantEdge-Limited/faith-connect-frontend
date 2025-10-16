"use client";

// Import UI components and icons
import Branch from "@/components/dashboard/user/dashboard_features/branch";
import Schedule from "@/components/dashboard/user/dashboard_features/schedule";
import CalendarComponent from "@/components/dashboard/user/dashboard_features/calendar";
import React from "react";

// Dashboard main component for the home page
export default function UserDashboard() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <Branch />
            <CalendarComponent />
            <Schedule />
          </div>
        </div>
      </section>
    </>
  );
}

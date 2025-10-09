"use client";

// Import UI components and icons
import Branch from "@/components/dashboard_features/branch";
import Schedule from "@/components/dashboard_features/schedule";
import CalendarComponent from "@/components/dashboard_features/calendar";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";
import React from "react";

// Dashboard main component for the home page
export default function Dashboard() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 pt-4 sm:pt-6">
            <Card className="p-4 sm:p-5 flex flex-col text-center items-center bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-2 dark:text-amber-400" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-amber-700 mb-1 dark:text-amber-300">
                7,821
              </CardTitle>
              <CardTitle className="text-sm sm:text-base font-semibold text-gray-800 mb-1 dark:text-gray-100">
                Total Members
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm dark:text-gray-300">
                Active Parishioners
              </CardDescription>
            </Card>

            <Card className="p-4 sm:p-5 flex flex-col text-center items-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
              <CalendarDays className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mb-2 dark:text-green-400" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-green-700 mb-1 dark:text-green-300">
                12
              </CardTitle>
              <CardTitle className="text-sm sm:text-base font-semibold text-gray-800 mb-1 dark:text-gray-100">
                Upcoming Events
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm dark:text-gray-300">
                In the next 7 days
              </CardDescription>
            </Card>

            <Card className="p-4 sm:p-5 flex flex-col text-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-md transition-shadow dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
              <span className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 dark:text-gray-100">
                Donations & Offerings
              </span>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 dark:text-blue-300">
                KES 45,210
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-gray-600 mb-1 dark:text-gray-300">
                This Month
              </CardDescription>
              <CardDescription className="text-xs text-gray-500 dark:text-gray-400">
                Target: KES 55,000
              </CardDescription>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </Card>
          </div>

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

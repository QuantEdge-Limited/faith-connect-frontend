
// Import UI components and icons
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import React from "react";
import Calendar from "../../../components/dashboard_features/calendar";
import Schedule from "../../../components/dashboard_features/schedule";
import Branch from "../../../components/dashboard_features/branch";

// Dashboard main component for the home page
export default function Dashboard() {
  return (
    <>
      {/* Main dashboard container */}
      <div className="dashboard-page p-4 pt-1 min-h-screen">
        {/* Top summary cards section */}
        <section className="w-full flex justify-around gap-4 mb-4">
          {/* Total Members Card */}
          <Card className="w-1/4 p-4 flex flex-col text-center items-center bg-gray-100 py-4 gap-1">
            {/* Users icon and member count */}
            <Users size={30} width={40} className="text-amber-600" />
            <CardTitle className="text-2xl font-bold text-amber-700">7821</CardTitle>
            <CardTitle className="text-lg font-semibold">Total Members</CardTitle>
            <CardDescription className="text-gray-400">Active Parishioners</CardDescription>
          </Card>
          {/* Upcoming Events Card */}
          <Card className="w-1/4 p-4 flex flex-col text-center items-center bg-green-100 py-4 gap-1">
            <Users size={30} width={40} className="text-green-600" />
            <CardTitle className="text-2xl font-bold text-green-700">12</CardTitle>
            <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
            <CardDescription className="text-gray-400">In the next 7 days</CardDescription>
          </Card>
          {/* Donations/Offerings Card */}
          <Card className="w-1/4 p-4 flex flex-col text-center items-center bg-gray-100 py-4 gap-1 overflow-hidden">
            <span className="text-md font-semibold">Urgent & Important Notices</span>
            <CardTitle className="text-2xl font-bold text-amber-700">KES 45,210</CardTitle>
            <CardDescription className="text-gray-600">Donations/ Offerings</CardDescription>
            <CardDescription className="text-gray-400">Target KES 55,000</CardDescription>
          </Card>
          {/* Number of Branches Card */}
          <Card className="w-1/4 p-4 flex flex-col text-center items-center bg-green-100 py-4 gap-1">
            <MapPin size={30} width={40} className="text-green-600" />
            <CardTitle className="text-2xl font-bold text-green-700">4</CardTitle>
            <CardTitle className="text-lg font-semibold">Number of Branches</CardTitle>
            <CardDescription className="text-gray-400">Including Main Church</CardDescription>
          </Card>
        </section>
        {/* Calendar section for upcoming events */}
        <section className="w-full flex pt-4">
          <Calendar />
        </section>
        {/* Schedule section for parish activities */}
        <Schedule />
        {/* Branch overview section */}
        <div className="flex">
          <Branch />
        </div>
      </div>
    </>
  );
}

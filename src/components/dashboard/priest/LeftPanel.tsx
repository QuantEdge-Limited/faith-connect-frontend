import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  ClipboardList,
  Clock,
  MapPin,
  Plus,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { ScheduleMassDrawer } from "./ScheduleMassDrawer";

export default function LeftPanel() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  const upcomingEvents = [
    {
      title: "Sunday Mass",
      time: "Tomorrow, 9:00 AM",
      location: "Main Chapel",
    },
    { title: "Bible Study", time: "Wed, 6:00 PM", location: "Fellowship Hall" },
    {
      title: "Youth Group",
      time: "Fri, 5:30 PM",
      location: "Community Center",
    },
  ];

  //   Update current date and time
  React.useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-1/4 bg-white border-r border-slate-200 p-6 overflow-y-auto">
        {/* User Profile */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            FR
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Fr. Robert Williams
            </h3>
            <p className="text-sm text-slate-500">Head Priest</p>
          </div>
        </div>

        {/* Current Date/Time */}
        <div className="mb-6 p-4 bg-slate-50 rounded-lg">
          <p className="text-xs text-slate-500 mb-1">Today</p>
          <div className="flex justify-between">
            <p className="text-sm font-medium text-slate-800">
              {currentTime?.toLocaleDateString("en-UK")}
            </p>
            <p className="text-sm font-medium text-slate-800">
              {currentTime?.toLocaleTimeString("en-UK")}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
            Parish Overview
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-blue-600" />
                <span className="text-sm text-slate-700">Total Members</span>
              </div>
              <span className="font-semibold text-slate-800">1,120</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
              <div className="flex items-center gap-2">
                <UserCheck size={16} className="text-emerald-600" />
                <span className="text-sm text-slate-700">Baptized</span>
              </div>
              <span className="font-semibold text-slate-800">1,120</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-purple-600" />
                <span className="text-sm text-slate-700">M / F Ratio</span>
              </div>
              <span className="font-semibold text-slate-800">52% / 48%</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
            Upcoming Events
          </h4>
          <div className="space-y-2">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <p className="text-sm font-medium text-slate-800 mb-1">
                  {event.title}
                </p>
                <p className="text-xs text-slate-600 flex items-center gap-1">
                  <Clock size={10} />
                  {event.time}
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin size={10} />
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
            Quick Actions
          </h4>
          <div className="space-y-2">
            <ScheduleMassDrawer triggerAsChild>
              <Button className="w-full px-4 py-2   bg-blue-600  text-white rounded-lg hover:bg-blue-700  flex items-center gap-2 text-sm">
                <CalendarDays size={14} /> Schedule Mass
              </Button>
            </ScheduleMassDrawer>
            <Button className="w-full px-4 py-2 border border-slate-300 bg-white text-slate-700 text-left rounded-lg hover:bg-slate-50 flex items-center gap-2 text-sm">
              <Plus size={14} /> Add Announcement
            </Button>
            <Button className="w-full px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 flex items-center gap-2 text-sm">
              <ClipboardList size={14} /> View Bookings
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

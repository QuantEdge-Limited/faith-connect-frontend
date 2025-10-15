import { Plus } from "lucide-react";
import React from "react";

export default function SchedulingSection() {
  // Sample data
  const announcements = [
    {
      id: 1,
      title: "Christmas Service Schedule",
      date: "2025-10-10",
      content: "Special services planned for Christmas Eve and Day...",
    },
    {
      id: 2,
      title: "Charity Drive",
      date: "2025-10-08",
      content: "Join us in collecting donations for local families in need...",
    },
    {
      id: 3,
      title: "Building Renovation Update",
      date: "2025-10-05",
      content: "Phase 1 of the chapel renovation is complete...",
    },
  ];
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-800">
            Mass Schedule
          </h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <Plus size={16} /> Schedule Mass
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="grid grid-cols-7 gap-4 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-slate-700 text-sm"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className="aspect-square border border-slate-200 rounded-lg p-2 hover:bg-slate-50 cursor-pointer"
              >
                <div className="text-sm font-medium text-slate-700">
                  {i + 1}
                </div>
                {i % 7 === 0 && (
                  <div className="mt-1">
                    <div className="text-xs bg-blue-100 text-blue-700 rounded px-1 py-0.5">
                      9 AM Mass
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

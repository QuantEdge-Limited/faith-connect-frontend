import { Calendar, Check, X } from "lucide-react";
import React from "react";

export default function BookingSection() {
  // Sample data
  const bookings = [
    {
      id: 1,
      type: "Baptism",
      name: "John & Mary Smith",
      date: "2025-10-20",
      status: "pending",
    },
    {
      id: 2,
      type: "Wedding",
      name: "David & Sarah Johnson",
      date: "2025-11-15",
      status: "pending",
    },
    {
      id: 3,
      type: "Funeral Service",
      name: "Thompson Family",
      date: "2025-10-18",
      status: "pending",
    },
  ];
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Booking Requests
        </h2>
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-slate-200"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {booking.type}
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      Pending Review
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">
                    {booking.name}
                  </h3>
                  <p className="text-sm text-slate-600 flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(booking.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center gap-2">
                    <Check size={16} /> Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
                    <X size={16} /> Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

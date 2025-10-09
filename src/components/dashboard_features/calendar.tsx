// CalendarComponent displays a calendar and a list of upcoming events/announcements
import React, { useState } from "react";
import { Card } from "../ui/card";
import { CalendarDays } from "lucide-react";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Example event data
  const events = [
    {
      id: 1,
      title: "Community Prayer",
      date: "2025-10-03",
      color: "#EF4444",
      description:
        "Join us for a special community prayer session focusing on thanksgiving and intercession for our community needs.",
    },
    {
      id: 2,
      title: "Bible Study",
      date: "2025-10-04",
      color: "#3B82F6",
      description:
        "Deep dive into the Gospel of John. Bring your Bible and join us for meaningful discussion and fellowship.",
    },
    {
      id: 3,
      title: "Youth Meeting",
      date: "2025-10-05",
      color: "#10B981",
      description:
        "Monthly youth gathering with worship, games, and discussions about faith in the modern world.",
    },
  ];

  // Renders the days for the current month
  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === selectedDate.getDate();
      days.push(
        <button
          key={i}
          onClick={() => setSelectedDate(new Date(year, month, i))}
          className={`aspect-square flex items-center justify-center rounded-lg text-sm sm:text-base hover:bg-gray-100 transition-colors ${
            isToday
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  // Month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3 px-1 dark:text-gray-100">
          Calendar & Events
        </h2>
        <Card className="bg-white shadow-sm border-[#D4AF37]/20 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-5">
            {/* Layout: Calendar on the left, Events on the right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Compact Calendar Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">
                    {monthNames[selectedDate.getMonth()]}{" "}
                    {selectedDate.getFullYear()}
                  </h3>
                  <CalendarDays className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                </div>

                {/* Weekday headers */}
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-gray-500 py-1 dark:text-gray-400"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days grid */}
                <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
              </div>

              {/* Events List Section */}
              <div className="md:border-l md:border-gray-200 md:pl-4 border-t md:border-t-0 border-gray-200 pt-3 md:pt-0 dark:md:border-gray-700 dark:border-gray-700">
                <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  Upcoming Events
                </h3>

                {/* Scrollable list of events */}
                <div className="space-y-2 max-h-3/4 overflow-y-auto pr-2 custom-scrollbar">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      {/* Colored indicator */}
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: event.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-medium text-base truncate"
                          style={{ color: event.color }}
                        >
                          {event.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

// Export the calendar component for use in dashboard
export default CalendarComponent;

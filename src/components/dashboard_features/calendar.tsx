
// CalendarComponent displays a calendar and a list of upcoming events/announcements
'use client';


import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarComponent: React.FC = () => {
  // State for selected date in the calendar
  const [date, setDate] = useState<Date | null>(new Date());

  // Sample list of events (replace with your data, e.g., from an API)
  const events = [
    {
      id: 1,
      title: 'Community Prayer',
      date: '2025-10-03',
      color: '#EF4444',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }, // Red
    {
      id: 2,
      title: 'Bible Study',
      date: '2025-10-04',
      color: '#3B82F6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }, // Blue
    {
      id: 3,
      title: 'Youth Meeting',
      date: '2025-10-05',
      color: '#10B981',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }, // Green
  ];

  // Handle date change from calendar
  const handleDateChange = (newDate: Date | Date[]) => {
    if (!Array.isArray(newDate)) {
      setDate(newDate);
    }
  };

  return (
    // Main calendar and events container
    <div className="calendar-container p-4 flex gap-8">
      <div>
        {/* Calendar widget for selecting dates */}
        {/* <h2 className="text-2xl font-bold mb-4">Faith Connect Calendar</h2> */}
        <Calendar
            onChange={handleDateChange}
            value={date}
            className="rounded-lg shadow-md p-4 bg-white mb-4 w-[30vw]"
        />
        {/* Display selected date */}
        <p className="mb-4">Selected Date: {date?.toDateString() || 'None'}</p>
      </div>
      <div>
        {/* Announcements and upcoming events list */}
        <h3 className="text-xl font-semibold mb-2">Announcements & Upcoming Events</h3>
        <ul className="list-none h-[19rem] overflow-y-auto">
          {events.map(event => (
            <div key={event.id} className='space-y-2 gap-2'>
              {/* Event title and date with colored dot */}
              <li
                key={event.id}
                className="mb-1 flex items-center"
                style={{ color: event.color }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: event.color }}
                ></span>
                {event.title} - {event.date}
              </li>
              {/* Event description */}
              <p className="text-sm text-gray-600 mb-2" style={{ color: event.color }}>{event.description}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};


// Export the calendar component for use in dashboard
export default CalendarComponent;
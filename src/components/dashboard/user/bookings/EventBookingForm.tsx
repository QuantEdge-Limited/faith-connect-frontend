'use client';

import { useState } from 'react';
import BookingForm from './BookingForm';

export default function EventBookingForm() {
  const [eventId, setEventId] = useState('rosary-oct');
  
  const events = [
    { id: 'rosary-oct', name: 'October Rosary Hour' },
    { id: 'harvest-fest', name: 'Parish Harvest Festival' },
    { id: 'youth-retreat', name: 'Youth Retreat 2025' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventName = events.find(e => e.id === eventId)?.name;
    alert(`Booking request for "${eventName}" submitted!`);
  };

  return (
    <BookingForm title="Book Parish Event" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Select Event *
          </label>
          <select
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {events.map(event => (
              <option key={event.id} value={event.id}>{event.name}</option>
            ))}
          </select>
        </div>
        {/* Add name, email, phone, # of people fields similarly */}
      </div>
    </BookingForm>
  );
}
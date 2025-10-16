'use client';

import { useState } from 'react';
import BookingTabs from '@/components/dashboard/user/bookings/BookingTabs';
import CatechismBookingForm from '@/components/dashboard/user/bookings/CatechismBookingForm';
import EventBookingForm from '@/components/dashboard/user/bookings/EventBookingForm';
import PriestAppointmentForm from '@/components/dashboard/user/bookings/PriestAppointmentForm';
// import BookingTabs from './components/BookingTabs';
// import CatechismBookingForm from './components/CatechismBookingForm';
// import PriestAppointmentForm from './components/PriestAppointmentForm';
// import EventBookingForm from './components/EventBookingForm';
// import OtherBookingForm from './components/OtherBookingForm';

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<'catechism' | 'priest' | 'event' | 'other'>('catechism');

  const renderForm = () => {
    switch (activeTab) {
      case 'catechism': return <CatechismBookingForm />;
      case 'priest': return <PriestAppointmentForm />;
      case 'event': return <EventBookingForm />;
    //   case 'other': return <OtherBookingForm />;
      default: return <CatechismBookingForm />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Book a Service</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Request catechism classes, priest appointments, event attendance, or other parish services.
        </p>
      </div>

      <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
        {renderForm()}
      </div>
    </div>
  );
}
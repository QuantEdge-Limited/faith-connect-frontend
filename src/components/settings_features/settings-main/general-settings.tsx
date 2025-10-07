"use client";
import { Cross } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const GeneralSettings = () => {

    const [timezones, setTimezones] = useState<string[]>([]);
    const [selectedTimezone, setSelectedTimezone] = useState('');

    useEffect(() => {
        const tz = Intl.supportedValuesOf('timeZone');
        setTimezones(tz);
        // Always set default timezone to 'Africa/Nairobi' on initial load
        setSelectedTimezone('Africa/Nairobi');
    }, []);

    interface TimezoneChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}

    const handleTimezoneChange = (event: TimezoneChangeEvent): void => {
        const tz: string = event.target.value;
        setSelectedTimezone(tz);
        if (tz) {
            const date: Date = new Date();
            const options: Intl.DateTimeFormatOptions = { timeZone: tz, timeZoneName: 'short' };
            const time: string = new Intl.DateTimeFormat('en-KE', options).format(date);
            console.log(`Current time in ${tz}: ${time}`);
        }
    }

  return (
    <div className='general-settings p-1 w-full min-h-[calc(100vh-6rem)] space-y-2'>
        <section className='p-4 px-8 bg-white rounded-md shadow-md w-full'>
            <h2 className='text-xl font-semibold'>Parish Identity & branding</h2>
            <div className="flex justify-between gap-4">
                <div className="flex flex-col space-y-2 mt-4">
                    <h3>Parish Name</h3>
                    <h3>Diocese</h3>
                    <Cross size={30} className='m-auto' />
                </div>
                <div className="flex flex-col space-y-2">
                    <p className='p-2 border border-gray-300 rounded-lg'>St Michael's Parish</p>
                    <p className='p-2 border border-gray-300 rounded-lg'>Archistate</p>
                    <p className='p-2 border border-gray-300 rounded-lg'>123, Githunguri, Kiambu</p>
                </div>
            </div>
        </section>
        <section className='p-4 px-8 bg-white rounded-md shadow-md w-full space-y-2'>
            <h2 className='text-xl font-semibold'>Time and Date</h2>
            <div className="flex justify-end items-center">
                <p className='p-2 border border-gray-300 rounded-lg w-[40%]'>Central Street, Limuru, Kiambu</p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Date Tone</h4>
                <p className='p-2 border border-gray-300 rounded-lg w-[40%]'>MM/DD/YYYY</p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Date Format</h4>
                <select id="timezone-select" value={selectedTimezone} onChange={handleTimezoneChange} className='p-2 border w-[40%] border-gray-300 rounded-lg'>
                    {timezones.map((tz) => (
                        <option key={tz} value={tz}>{tz}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>New Day of Week</h4>
                <p className='p-2 border border-gray-300 rounded-lg w-[40%]'>Sunday</p>
            </div>
        </section>
        <section className='p-4 px-8 bg-white rounded-md shadow-md w-full space-y-2'>
            <h2 className='text-xl font-semibold'>System Defaults</h2>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>New Member Status</h4>
                <p className='p-2 border border-gray-300 rounded-full bg-green-700 relative w-[10%] h-[35px]'><span className='absolute w-1/2 bg-white rounded-full inset-0 z-50'></span></p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Default Currency</h4>
                <p className='pe-4'>KES </p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Auto Generate Reports</h4>
                <p className='p-2 border border-gray-300 rounded-full bg-green-700 relative w-[10%] h-[35px]'><span className='absolute w-1/2 bg-white rounded-full inset-0 z-50'></span></p>
            </div>
        </section>
    </div>
  )
}

export default GeneralSettings
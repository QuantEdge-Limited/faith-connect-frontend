"use client";
import ThemeContext from '@/lib/ThemeContext';
import { Cross } from 'lucide-react'
import Image from 'next/image';
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

    // Theme options: map friendly labels to stored values
    const themes = [
        { label: 'System Default', value: 'system' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
    ];

    const [selectedTheme, setSelectedTheme] = useState<string>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'system'
        }
        return 'system'
    });

    // When the theme select changes, persist to localStorage and notify other components
    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const theme: string = event.target.value;
        setSelectedTheme(theme);
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('theme', theme);
            // Dispatch custom event so ThemeContext or other listeners can react immediately
            window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
        }
    }

    const fontSizes = ['Small', 'Medium', 'Large'];
    const [selectedFontSize, setSelectedFontSize] = useState(fontSizes[1]);

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const size: string = event.target.value;
        setSelectedFontSize(size);
        console.log(`Selected font size: ${size}`);
    }

  return (
    <div className='general-settings p-1 w-full min-h-[calc(100vh-6rem)] space-y-2'>
        <section className='p-4 px-8 bg-white dark:bg-gray-800 rounded-md shadow-md w-full'>
            <h2 className='text-xl font-semibold pb-2 dark:text-gray-100'>Personal Profile</h2>
            <div className="flex justify-between px-4 w-full pb-2">
                <Image src={'/profile-placeholder.png'} alt="Profile Picture" width={100} height={100} className='rounded-full' />
                <div className='fex flex-col gap-2 w-2/3 px-4'>
                    <h4 className='font-semibold italic text-xl dark:text-gray-100'>John Doe</h4>
                    <p className="text-sm dark:text-gray-300"><span>0712345678</span></p>
                    <p className='font-semibold dark:text-gray-100'>Bio: <span className='text-sm dark:text-gray-300'>bio</span></p>
                    <button className='p-2 py-[1px] bg-gray-500 hover:bg-blue-500 text-white rounded-md cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600'>Edit Profile</button>
                </div>
            </div>
        </section>
        <section className='p-4 px-8 bg-white dark:bg-gray-800 rounded-md shadow-md w-full'>
            <h2 className='text-xl font-semibold dark:text-gray-100'>Parish Identity & branding</h2>
            <div className="flex justify-between gap-4">
                <div className="flex flex-col space-y-2 mt-4">
                    <h3>Parish Name</h3>
                    <h3>Diocese</h3>
                    <Cross size={30} className='m-auto' />
                </div>
                <div className="flex flex-col space-y-2">
                    <p className='p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>St Michael's Parish</p>
                    <p className='p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>Archistate</p>
                    <p className='p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>123, Githunguri, Kiambu</p>
                </div>
            </div>
        </section>
        <section className='p-4 px-8 bg-white dark:bg-gray-800 rounded-md shadow-md w-full space-y-2'>
            <h2 className='text-xl font-semibold dark:text-gray-100'>Time and Date</h2>
            <div className="flex justify-end items-center">
                <p className='p-2 border border-gray-300 rounded-lg w-[40%] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>Central Street, Limuru, Kiambu</p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Date Tone</h4>
                <p className='p-2 border border-gray-300 rounded-lg w-[40%] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>MM/DD/YYYY</p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Date Format</h4>
                <select id="timezone-select" value={selectedTimezone} onChange={handleTimezoneChange} className='p-2 border w-[40%] border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {timezones.map((tz) => (
                        <option key={tz} value={tz} className='dark:bg-gray-800 dark:text-gray-200'>{tz}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>New Day of Week</h4>
                <p className='p-2 border border-gray-300 rounded-lg w-[40%] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>Sunday</p>
            </div>
        </section>
        <section className='p-4 px-8 bg-white dark:bg-gray-800 rounded-md shadow-md w-full space-y-2'>
            <h2 className='text-xl font-semibold dark:text-gray-100'>System Defaults</h2>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>New Member Status</h4>
                <p className='p-2 border border-gray-300 rounded-full bg-green-700 relative w-[8%] h-[35px]'><span className='absolute w-1/2 bg-white rounded-full inset-0 z-50'></span></p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Default Currency</h4>
                <p className='pe-4 dark:text-gray-200'>KES </p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Auto Generate Reports</h4>
                <p className='p-2 border border-gray-300 rounded-full bg-green-700 relative w-[8%] h-[35px]'><span className='absolute w-1/2 bg-white rounded-full inset-0 z-50'></span></p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Choose Theme</h4>
                <ThemeContext />
            </div>
            {/* <div className="flex justify-between gap-4 space-y-1 items-center">
                <ThemeContext />
            </div> */}
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Font Size Preference</h4>
                <select id="font-size-select" value={selectedFontSize} onChange={handleFontSizeChange} className='p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {fontSizes.map((size) => (
                        <option key={size} value={size} className='dark:bg-gray-800 dark:text-gray-200'>{size}</option>
                    ))}
                </select>
            </div>
        </section>
    </div>
  )
}

export default GeneralSettings
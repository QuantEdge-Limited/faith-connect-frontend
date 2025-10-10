"use client";
import ThemeContext from '@/lib/ThemeContext';
import { Cross } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const GeneralSettings = () => {

    const [timezones, setTimezones] = useState<string[]>([]);
    // initialize selectedTimezone to 'Africa/Nairobi' by default when available
    const getInitialTimezone = (): string => {
        const preferred = 'Africa/Nairobi';
        try {
            // If runtime exposes supportedValuesOf, prefer the preferred tz when present
            const supported = (Intl as any).supportedValuesOf ? (Intl as any).supportedValuesOf('timeZone') : [];
            if (Array.isArray(supported) && supported.includes(preferred)) return preferred;
        } catch (e) {
            // ignore and try other methods
        }

        if (typeof Intl !== 'undefined' && typeof Intl.DateTimeFormat === 'function') {
            try {
                const systemTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (systemTz) return systemTz;
            } catch (e) {
                // fallthrough to UTC
            }
        }

        return 'UTC';
    }
    const [selectedTimezone, setSelectedTimezone] = useState<string>(getInitialTimezone());

    const [selectedProfileVisible, setSelectedProfileVisible] = useState<boolean>(true);
    const [selectedMemberStatus, setSelectedMemberStatus] = useState<boolean>(true);

    // Currency selector state: default to KES
    const CURRENCIES = ['KES', 'USD', 'EUR', 'GBP', 'UGX', 'TZS'];
    const [selectedCurrency, setSelectedCurrency] = useState<string>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('currency') || 'KES';
        }
        return 'KES';
    });

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const cur = e.target.value;
        setSelectedCurrency(cur);
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('currency', cur);
            window.dispatchEvent(new CustomEvent('currency-change', { detail: { currency: cur } }));
        }
    }

    useEffect(() => {
        // populate list of timezones where available; guard for environments that don't support supportedValuesOf
        try {
            // Intl.supportedValuesOf may not exist in older browsers; guard accordingly
            const tz = (Intl as any).supportedValuesOf ? (Intl as any).supportedValuesOf('timeZone') : [];
            setTimezones(Array.isArray(tz) && tz.length ? tz : []);
        } catch (e) {
            setTimezones([]);
        }
        // keep existing selectedTimezone (initialized above) rather than force overriding
    }, []);

    interface TimezoneChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}

    const handleTimezoneChange = (event: TimezoneChangeEvent): void => {
        const tz: string = event.target.value;
        setSelectedTimezone(tz);
        if (tz) {
            const date: Date = new Date();
            const options: Intl.DateTimeFormatOptions = { timeZone: tz, timeZoneName: 'short' };
            try {
                const time: string = new Intl.DateTimeFormat('en-KE', options).format(date);
                console.log(`Current time in ${tz}: ${time}`);
            } catch (err) {
                // invalid timezone value passed; fallback to UTC and log a warning
                console.warn(`Invalid timeZone specified (${tz}), falling back to UTC.`, err);
                const fallbackOptions: Intl.DateTimeFormatOptions = { timeZone: 'UTC', timeZoneName: 'short' };
                const time: string = new Intl.DateTimeFormat('en-KE', fallbackOptions).format(date);
                console.log(`Current time in UTC: ${time}`);
                setSelectedTimezone('UTC');
            }
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
                <p className='p-2 border border-gray-300 rounded-lg md:w-[40%] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>Central Street, Limuru, Kiambu</p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Date Tone</h4>
                <p className='p-2 border border-gray-300 rounded-lg md:w-[40%] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {(() => {
                        try {
                            // Format as MM/DD/YYYY in the selected timezone
                            const now = new Date();
                            const options: Intl.DateTimeFormatOptions = {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                timeZone: selectedTimezone,
                            };
                            // en-US gives MM/DD/YYYY
                            return new Intl.DateTimeFormat('en-US', options).format(now);
                        } catch (err) {
                            // fallback to default date string
                            return new Date().toLocaleDateString();
                        }
                    })()}
                </p>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Time Zone</h4>
                <select id="timezone-select" value={selectedTimezone} onChange={handleTimezoneChange} className='p-2 border w-[40%] max-sm:text-sm border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {/* If supported timezones are available, list them; otherwise show a UTC/default option */}
                    {timezones.length ? (
                        timezones.map((tz) => (
                            <option key={tz} value={tz} className='dark:bg-gray-800 dark:text-gray-200'>{tz}</option>
                        ))
                    ) : (
                        <option key="UTC" value="UTC">UTC</option>
                    )}
                </select>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4>Day of Week</h4>
                <p className='p-2 border border-gray-300 rounded-lg w-[40%] dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {(() => {
                        try {
                            return new Intl.DateTimeFormat('en-KE', { weekday: 'long', timeZone: selectedTimezone }).format(new Date());
                        } catch (err) {
                            // fallback to no timeZone option
                            console.warn(`Failed to format weekday with timezone '${selectedTimezone}', falling back.`, err);
                            return new Intl.DateTimeFormat('en-KE', { weekday: 'long' }).format(new Date());
                        }
                    })()}
                </p>
            </div>
        </section>
        <section className='p-4 px-8 bg-white dark:bg-gray-800 rounded-md shadow-md w-full space-y-2'>
            <h2 className='text-xl font-semibold dark:text-gray-100'>System Defaults</h2>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>New Member Status</h4>
                <button type="button" aria-pressed={selectedMemberStatus} onClick={() => setSelectedMemberStatus((prev) => !prev)}
                    className={`w-[48px] h-[28px] rounded-full relative transition-colors duration-200 border border-gray-300 dark:border-gray-700 focus:outline-none ${
                        selectedMemberStatus ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                >
                    <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow transition-transform duration-200 ${selectedMemberStatus ? 'translate-x-5' : ''}`}/>
                </button>
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Default Currency</h4>
                <select id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange} className='p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {CURRENCIES.map((c) => (
                        <option key={c} value={c} className='dark:bg-gray-800 dark:text-gray-200'>{c}</option>
                    ))}
                </select>
            </div>
            {/* <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Auto Generate Reports</h4>
                <p className='p-2 border border-gray-300 rounded-full bg-green-700 relative w-[8%] h-[35px]'><span className='absolute w-1/2 bg-white rounded-full inset-0 z-50'></span></p>
            </div> */}
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Choose Theme</h4>
                <ThemeContext />
            </div>
            <div className="flex justify-between gap-4 space-y-1 items-center">
                <h4 className='dark:text-gray-100'>Font Size Preference</h4>
                <select id="font-size-select" value={selectedFontSize} onChange={handleFontSizeChange} className='p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200'>
                    {fontSizes.map((size) => (
                        <option key={size} value={size} className='dark:bg-gray-800 dark:text-gray-200'>{size}</option>
                    ))}
                </select>
            </div>
                <div className="flex flex-col mt-2">
                    <div className="flex justify-between gap-1 space-y-1 items-center">
                    <h4 className='dark:text-gray-100 max-sm:text-sm'>Make your profile visible publicly</h4>
                    <button type="button" aria-pressed={selectedProfileVisible}
                        onClick={() => setSelectedProfileVisible((prev) => !prev)}
                        className={`w-[48px] h-[28px] rounded-full relative transition-colors duration-200 border border-gray-300 dark:border-gray-700 focus:outline-none ${
                            selectedProfileVisible ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}>
                        <span
                            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow transition-transform duration-200 ${
                                selectedProfileVisible ? 'translate-x-5' : ''
                            }`}
                        />
                    </button>
                </div>
                <p className='text-sm max-sm:text-xs italic ps-2 dark:text-gray-300'>Allow other users to view your profile information</p>
            </div>
        </section>
    </div>
  )
}

export default GeneralSettings
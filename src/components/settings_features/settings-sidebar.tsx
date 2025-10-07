import { MapPin, Settings, UserCog, UserRoundPlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SettingsSidebar = () => {

    const settingsLinks =[
        { index: 1, href: "/settings", label: "General Settings", icon: Settings },
        { index: 2, href: "/settings", label: "User & Role Management", icon: UserCog },
        { index: 3, href: "/settings", label: "User & Role Location Setup", icon: UserRoundPlus },
        { index: 4, href: "/settings", label: "General Upload", icon: MapPin },
        { index: 5, href: "/settings", label: "Liturgical & Locance Setup", icon: Settings },
        { index: 6, href: "/settings", label: "Liotogion & Finance Setup", icon: Settings },
        { index: 7, href: "/settings", label: "Communication Alerts", icon: Settings },
        { index: 8, href: "/settings", label: "Data Backup", icon: Settings },
        { index: 9, href: "/settings", label: "Data Privacy", icon: Settings },
        { index: 10, href: "/settings", label: "Apperance & Branding", icon: Settings },
    ]

  return (
    <div className='settings-sidebar w-1/3 md:w-1/4 lg:w-1/4 bg-white rounded-md space-y-3'>
        <div className="settings-sidebar-header w-full bg-gray-800 text-white font-semibold flex p-2 gap-2 lg:gap-3 rounded-t-md"><Settings size={25} className='text-gray-200' />Settings Menu</div>
        <div className="settings-sidebar-links flex flex-col p-2 space-y-1">
            {settingsLinks.map(({index, href, label, icon: Icon}) => (
                <Link key={index} href={href} className='px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm'>
                    <Icon size={20} className='text-gray-600' />
                    {label}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SettingsSidebar
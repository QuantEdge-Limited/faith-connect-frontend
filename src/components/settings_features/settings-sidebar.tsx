import { Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SettingsSidebar = () => {

    const settingsLinks =[
        { href: "/settings", label: "General Settings", icon: Settings },
        { href: "/settings/profile", label: "Profile Settings", icon: Settings },
        { href: "/settings/account", label: "Account Settings", icon: Settings },
        { href: "/settings/notifications", label: "Notification Settings", icon: Settings },
        { href: "/settings/privacy", label: "Privacy Settings", icon: Settings },
        { href: "/settings/security", label: "Security Settings", icon: Settings },
    ]

  return (
    <div className='settings-sidebar w-1/3 md:w-1/4 lg:w-1/5 bg-white rounded-md space-y-3'>
        <div className="settings-sidebar-header w-full bg-gray-800 text-white font-semibold flex p-2 gap-2 lg:gap-3 rounded-t-md"><Settings size={30} className='text-gray-200' />Settings Menu</div>
        <div className="settings-sidebar-links flex flex-col p-2">
            {settingsLinks.map(({href, label, icon: Icon}) => (
                <Link key={href} href={href} className='px-4 py-3 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2'>
                    <Icon size={20} className='text-gray-600' />
                    {label}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SettingsSidebar
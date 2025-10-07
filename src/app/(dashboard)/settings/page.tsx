import GeneralSettings from '@/components/settings_features/settings-main/general-settings'
import SettingsSidebar from '@/components/settings_features/settings-sidebar'
import React from 'react'

export default function SettingsPage() {
  return (
    <div className='flex w-full min-h-[calc(100vh-4rem)]'>
      <SettingsSidebar />
      <div className='p-4 w-full'>
        <GeneralSettings />
      </div>
    </div>
  )
}

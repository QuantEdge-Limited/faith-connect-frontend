"use client"
import Link from 'next/link'
import React from 'react'

interface GroupProps {
  total?: number
  recent?: Array<{ id: number; title: string }>
}

const DEFAULT_RECENT: Array<{ id: number; title: string }> = [
  { id: 1, title: 'Youth Choir' },
  { id: 2, title: 'St. Vincent de Paul' },
  { id: 3, title: 'Legion of Mary' },
  { id: 4, title: 'Bible Study Group' },
  { id: 5, title: 'Women\'s Guild' },
]

const Group: React.FC<GroupProps> = ({ total, recent = DEFAULT_RECENT }) => {
  const displayTotal = total ?? recent.length

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Groups</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">You are part of <span className="font-medium text-gray-900 dark:text-gray-100">{displayTotal}</span> groups</p>
        </div>
        <div className="text-right">
          <Link href="/dashboard/groups" className="inline-block px-3 py-1 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">View all</Link>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {recent.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No recent groups</p>
        ) : (
          recent.slice(0, 3).map((g) => (
            <div key={g.id} className="p-2 bg-gray-50 dark:bg-gray-700 rounded-md flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{g.title}</p>
              </div>
              <Link href="/dashboard/groups" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View</Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Group

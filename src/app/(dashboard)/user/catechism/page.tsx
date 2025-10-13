"use client"
import React, { useMemo, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation' // Assuming Next.js for routing
import axios from 'axios' // For API calls
import Link from 'next/link'

type ClassItem = {
  id: number
  title: string
  level: string
  instructor: string
  schedule: string
  seats: number
}

type CatechismRecord = {
  id: number
  date_of_baptism: string
  place_of_baptism: string
  baptism_officiant: string
  certificate_number: string
  godparents: string
  parish: string
  confirmed: boolean
  date_of_confirmation: string | null
  notes: string
}

const MOCK_CLASSES: ClassItem[] = [
  { id: 1, title: 'Catechism Level 1', level: 'Beginner', instructor: 'Sr. Mary', schedule: 'Sat 10:00 - 11:30', seats: 25 },
  { id: 2, title: 'Catechism Level 2', level: 'Intermediate', instructor: 'Fr. John', schedule: 'Sun 9:00 - 10:30', seats: 20 },
  { id: 3, title: 'First Communion Prep', level: 'Beginner', instructor: 'Mrs. Wanjiku', schedule: 'Sat 12:00 - 13:30', seats: 18 },
  { id: 4, title: 'Confirmation Prep', level: 'Advanced', instructor: 'Fr. Peter', schedule: 'Wed 17:00 - 19:00', seats: 15 },
  { id: 5, title: 'Youth Faith Formation', level: 'Youth', instructor: 'Youth Team', schedule: 'Fri 18:00 - 19:30', seats: 30 },
]

export default function CatechismPage() {
  const [query, setQuery] = useState('')
  const [levelFilter, setLevelFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Youth'>('All')
  const [enrolled, setEnrolled] = useState<number[]>([])
  const [view, setView] = useState<'classes' | 'profile'>('classes') // Toggle between views
  const [record, setRecord] = useState<CatechismRecord | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const levels = useMemo(() => ['All', ...Array.from(new Set(MOCK_CLASSES.map(c => c.level)))] as any, [])

  const filtered = useMemo(() => {
    return MOCK_CLASSES.filter(c => {
      if (levelFilter !== 'All' && c.level !== levelFilter) return false
      if (query && !(`${c.title} ${c.instructor} ${c.level}`).toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [query, levelFilter])

  const toggleEnroll = (id: number) => {
    setEnrolled(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  // Fetch catechism record on mount
  useEffect(() => {
    const fetchRecord = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/records/me/', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Adjust based on your auth setup
        })
        setRecord(response.data)
      } catch (err) {
        setError('Failed to load catechism record. Please contact the parish admin.')
      } finally {
        setLoading(false)
      }
    }
    if (view === 'profile') {
      fetchRecord()
    }
  }, [view])

  return (
    <div className="p-6 space-y-6">
      <nav className="text-sm text-gray-600 dark:text-gray-300">
        <ol className="flex gap-2">
          <li className="text-gray-900 font-medium dark:text-gray-100">
            <button onClick={() => setView('classes')} className={view === 'classes' ? 'underline' : ''}>Catechism</button>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium dark:text-gray-100">
            <button onClick={() => setView('profile')} className={view === 'profile' ? 'underline' : ''}>Profile</button>
          </li>
        </ol>
      </nav>

      {view === 'classes' ? (
        <>
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold dark:text-gray-100">Catechism Classes</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Find classes, view schedules and enroll.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search classes or instructor"
                className="w-full sm:w-64 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <select
                value={levelFilter}
                onChange={e => setLevelFilter(e.target.value as any)}
                className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              >
                {levels.map((l: string) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {filtered.map(c => (
                <article key={c.id} className="p-4 rounded-xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold dark:text-gray-100">{c.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{c.level} • {c.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{c.schedule}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Seats: {c.seats}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-gray-700 dark:text-gray-200">A short description can go here — class goals and expectations.</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleEnroll(c.id)}
                        className={`px-3 py-1 rounded-md text-sm ${enrolled.includes(c.id) ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                      >
                        {enrolled.includes(c.id) ? 'Enrolled' : 'Enroll'}
                      </button>
                      <a href="#" className="text-sm text-blue-600 dark:text-blue-300 hover:underline">
                        Details
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold dark:text-gray-100">Upcoming Sessions</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>Level 1 — Sat, 10 Oct — 10:00</li>
                  <li>Level 2 — Sun, 11 Oct — 9:00</li>
                  <li>Confirmation — Wed, 14 Oct — 17:00</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold dark:text-gray-100">Quick Actions</h4>
                <div className="mt-2 flex flex-col gap-2">
                  <Link href="/groups" className="px-3 py-2 rounded-md bg-blue-600 text-white text-center">View Groups</Link>
                  <Link href="/parish_announcements" className="px-3 py-2 rounded-md bg-emerald-600 text-white text-center">Announcements</Link>
                </div>
              </div>
            </aside>
          </section>
        </>
      ) : (
        <section className="p-4 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
          <h2 className="text-xl font-bold dark:text-gray-100">Catechism Profile</h2>
          {loading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-red-600 dark:text-red-400">{error}</p>
          ) : record ? (
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-100">Baptism Details</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Date of Baptism:</strong> {new Date(record.date_of_baptism).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Place of Baptism:</strong> {record.place_of_baptism}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Baptism Officiant:</strong> {record.baptism_officiant || 'N/A'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Certificate Number:</strong> {record.certificate_number}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Godparents:</strong> {record.godparents || 'N/A'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Parish:</strong> {record.parish || 'N/A'}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-100">Confirmation Details</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Confirmed:</strong> {record.confirmed ? 'Yes' : 'No'}
                </p>
                {record.confirmed && record.date_of_confirmation && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Date of Confirmation:</strong> {new Date(record.date_of_confirmation).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-100">Notes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{record.notes || 'No notes available.'}</p>
              </div>
              <div>
                <button
                  className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => alert('Contact parish admin to update details.')}
                >
                  Request Update
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No catechism record found. Please contact the parish admin to add your details.</p>
          )}
        </section>
      )}
    </div>
  )
}
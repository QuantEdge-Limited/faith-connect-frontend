
// Schedule component displays the mass schedule table for the dashboard
import React from 'react'

const Schedule = () => {
  return (
    // Section for displaying mass schedule
    <section className='pt-4 flex flex-col'>
        {/* Section title */}
        <h2 className='text-xl font-semibold mb-3'>Mass Schedule</h2>
        {/* Table for mass schedule details */}
        <table className='w-full pt-2 space-x-4'>
            <thead>
                <tr>
                    {/* Table headers for schedule columns */}
                    <th className='text-start'>Date</th>
                    <th className='text-start'>Time</th>
                    <th className='text-start'>Location</th>
                    <th className='text-start'>Priest</th>
                    <th className='text-start'>Intentions</th>
                </tr>
            </thead>
            <tbody>
                {/* Example schedule rows */}
                <tr>
                    <td>2025-10-01</td>
                    <td>10:00 AM</td>
                    <td>Main Church</td>
                    <td>Fr. John Doe</td>
                    <td>For the sick and elderly</td>
                </tr>
                <tr>
                    <td>2025-10-02</td>
                    <td>5:00 PM</td>
                    <td>St. Mary's</td>
                    <td>Fr. Jane Smith</td>
                    <td>For world peace</td>
                </tr>
                <tr>
                    <td>2025-10-02</td>
                    <td>5:00 PM</td>
                    <td>St. Mary's</td>
                    <td>Fr. Jane Smith</td>
                    <td>For world peace</td>
                </tr>
                <tr>
                    <td>2025-10-02</td>
                    <td>5:00 PM</td>
                    <td>St. Mary's</td>
                    <td>Fr. Jane Smith</td>
                    <td>For world peace</td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default Schedule
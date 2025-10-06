
// Branch component displays an overview of church branches
import Image from 'next/image'
import React from 'react'

// Main Branch component
const Branch = () => {
    // List of branch objects (replace with API data as needed)
    const branches = [
        {
            id: 1,
            name: 'Grace Community Church',
            image: '/images/churches/grace-community.jpg', // Placeholder image path
            location: {
            address: '123 Hope Street',
            city: 'Nairobi',
            state: 'Nairobi County',
            country: 'Kenya',
            coordinates: { lat: -1.286389, lng: 36.817223 },
            },
            pastor: 'Rev. John Mwangi',
            serviceTimes: ['Sunday 9:00 AM', 'Sunday 11:00 AM', 'Wednesday 6:00 PM'],
            contact: {
            phone: '+254 712 345 678',
            email: 'info@gracecommunity.ke',
            website: 'https://gracecommunity.ke',
            },
        },
        {
            id: 2,
            name: 'Hope Fellowship',
            image: '/images/churches/hope-fellowship.jpg',
            location: {
            address: '456 Faith Avenue',
            city: 'Mombasa',
            state: 'Mombasa County',
            country: 'Kenya',
            coordinates: { lat: -4.043477, lng: 39.668206 },
            },
            pastor: 'Pastor Sarah Wanjiku',
            serviceTimes: ['Sunday 8:30 AM', 'Sunday 10:30 AM', 'Friday 7:00 PM'],
            contact: {
            phone: '+254 723 456 789',
            email: 'contact@hopefellowship.ke',
            },
        },
        {
            id: 3,
            name: 'Victory Chapel',
            image: '/images/churches/victory-chapel.jpg',
            location: {
            address: '789 Salvation Road',
            city: 'Kisumu',
            state: 'Kisumu County',
            country: 'Kenya',
            coordinates: { lat: -0.091702, lng: 34.767956 },
            },
            pastor: 'Rev. Peter Omondi',
            serviceTimes: ['Sunday 10:00 AM', 'Wednesday 5:30 PM'],
            contact: {
            phone: '+254 734 567 890',
            email: 'victorychapel@gmail.com',
            website: 'https://victorychapel.ke',
            },
        },
        {
            id: 4,
            name: 'Peace Sanctuary',
            image: '/images/churches/peace-sanctuary.jpg',
            location: {
            address: '101 Unity Lane',
            city: 'Eldoret',
            state: 'Uasin Gishu County',
            country: 'Kenya',
            coordinates: { lat: 0.514277, lng: 35.269780 },
            },
            pastor: 'Pastor Mary Chebet',
            serviceTimes: ['Sunday 9:30 AM', 'Sunday 11:30 AM', 'Tuesday 6:00 PM'],
            contact: {
            phone: '+254 745 678 901',
            email: 'info@peacesanctuary.ke',
            },
        },
        {
            id: 5,
            name: 'Living Word Assembly',
            image: '/images/churches/living-word.jpg',
            location: {
            address: '321 Redemption Drive',
            city: 'Nakuru',
            state: 'Nakuru County',
            country: 'Kenya',
            coordinates: { lat: -0.303099, lng: 36.080026 },
            },
            pastor: 'Rev. David Kamau',
            serviceTimes: ['Sunday 8:00 AM', 'Sunday 10:00 AM', 'Thursday 6:30 PM'],
            contact: {
            phone: '+254 756 789 012',
            email: 'contact@livingword.ke',
            website: 'https://livingword.ke',
            },
        },
    ]
  return (
    // Section for branch overview
    <section className='pt-6 flex flex-col'>
        {/* Section title */}
        <h2 className='text-xl font-semibold mb-3'>Branch Overview</h2>
        {/* Grid layout for branch cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3'>
            {/* Display up to 4 branches */}
            {branches.slice(0,4).map(branch => (
                <div key={branch.id} className='border rounded-lg p-4 shadow-md'>
                    <div className="flex">
                        {/* Branch image and basic info */}
                        <Image src={branch.image} alt={branch.name} width={50} height={50} className='object-cover rounded-full mb-2' />
                        <div className='pl-2 gap-1'>
                            <h3 className='text-lg font-semibold'>{branch.name}</h3>
                            <p className='text-sm text-gray-600 mb-1'>{branch.pastor}</p>
                        </div>
                    </div>
                    {/* Branch location */}
                    <p className='text-sm mb-1'><span className='font-semibold'>Location:</span> {branch.location.address}, {branch.location.city}</p>
                    {/* Service times */}
                    <p className='text-sm mb-1'><span className='font-semibold'>Service Times:</span> {branch.serviceTimes.join(', ')}</p>
                    {/* Contact info */}
                    <p className='text-sm mb-1'><span className='font-semibold'>Contact:</span> {branch.contact.phone} | {branch.contact.email}</p>
                    {/* Website link if available */}
                    {branch.contact.website && (
                        <p className='text-sm'><span className='font-semibold'>Website:</span> <a href={branch.contact.website} className='text-blue-500 underline' target='_blank' rel='noopener noreferrer'>{branch.contact.website}</a></p>
                    )}
                </div>
            ))}
            {/* Show 'More Branches' button if there are more than 4 branches */}
            {branches.length > 4 && (
            <div className="flex mt-2 w-2/3">
                <button className="px-6 py-2 bg-gray-600 mx-auto text-white rounded-md shadow hover:bg-blue-700 transition cursor-pointer">More Branches</button>
            </div>
            )}
        </div>
    </section>
  )
}

export default Branch
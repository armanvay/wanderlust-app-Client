
import BookingCensel from '@/component/BookingCensel';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
;
import React from 'react';

const MyBooking = async() => {
    const session = await auth.api.getSession({
      headers: await headers(), 
    });
    const user =session?.user
    console.log(user)
    const res = await fetch(`http://localhost:5000/mybooking/${user?.id}`)
    const booking =await res.json()
 

    const handelDeletd =()=>{

    }
    return (
      <div>
        my booking
        <div>
          {booking.map((booking) => (
            <div
              className="w-full mb-10 max-w-5xl mx-auto border rounded-xl p-4 shadow-sm bg-white"
              key={booking._id}
            >
              <div className="flex flex-col md:flex-row gap-5 items-center">
                {/* Image */}
                <Image
                  src={booking.destinationImageUrl.trim()}
                  alt={booking.destinationName}
                  height={300}
                  width={300}
                />

                {/* Content */}
                <div className="flex-1 w-full">
                  {/* Top */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                      Confirmed
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-bold text-gray-900">
                    {booking.destinationName}
                  </h1>

                  {/* Country */}
                  <p className="text-gray-500 mt-1">
                    Country: {booking.destinationcountry}
                  </p>

                  {/* Date */}
                  <div className="mt-4 space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">Departure:</p>

                    <p className="flex items-center gap-2">
                      Booking ID: {booking._id.slice(0, 6)}
                    </p>
                  </div>

                  {/* Price */}
                  <h2 className="text-4xl font-bold text-cyan-500 mt-5">
                    ${booking.destinationPrice}
                  </h2>
                </div>

                {/* Buttons */}
                <div className="flex md:flex-col gap-3">
                  <BookingCensel booking={booking}></BookingCensel>
                  <button className="bg-cyan-500 text-white px-5 py-2 rounded-md hover:bg-cyan-600 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyBooking;
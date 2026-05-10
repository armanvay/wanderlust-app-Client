import TravelCard from '@/component/TravelCard';
import React from 'react';

const DestinationsPage = async() => {
    const res = await fetch("http://localhost:5000/destinations");
    const destinations = await res.json();
    console.log(destinations);
    return (
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-3xl font-bold text-center p-2 ">
          All Destinations
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {destinations.map((destination) => (
            <TravelCard
              key={destination._id}
              destination={destination}
            ></TravelCard>
          ))}
        </div>
      </div>
    );
};

export default DestinationsPage;
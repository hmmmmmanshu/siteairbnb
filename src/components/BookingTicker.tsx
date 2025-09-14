import React from 'react';

const BookingTicker: React.FC = () => {
  const bookingPlatforms = [
    {
      name: "Airbnb",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#FF5A5F] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-gray-700 font-medium text-lg">airbnb</span>
        </div>
      )
    },
    {
      name: "Tripadvisor",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#34E0A1] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">oo</span>
          </div>
          <span className="text-gray-700 font-medium text-lg">Tripadvisor</span>
        </div>
      )
    },
    {
      name: "Booking.com",
      logo: (
        <div className="flex items-center">
          <span className="text-gray-700 font-medium text-lg">
            Booking<span className="text-blue-600">.com</span>
          </span>
        </div>
      )
    },
    {
      name: "MakeMyTrip",
      logo: (
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium text-lg">make</span>
          <div className="w-8 h-8 bg-[#FF5A5F] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">MY</span>
          </div>
          <span className="text-gray-700 font-medium text-lg">trip</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-b border-amber-200">
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {bookingPlatforms.map((platform, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
              {platform.logo}
            </div>
          ))}
          {/* Second set of logos for seamless loop */}
          {bookingPlatforms.map((platform, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
              {platform.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingTicker;

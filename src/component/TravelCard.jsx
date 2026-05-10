import { MapPin, Calendar, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TravelCard = ({ destination }) => {
  return (
    <div className=" bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 font-sans">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <Image
          src={destination.imageUrl.trimStart()}
          alt={destination.destinationName}
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <span className="text-sm font-bold text-gray-800">
            {destination.rating}
          </span>
          <Star size={14} className="fill-black text-black" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500">
          <MapPin size={18} className="text-gray-400" />
          <span className="text-sm font-medium">{destination.country}</span>
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {destination.destinationName}
          </h2>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              ${destination.price}
            </p>
            <p className="text-xs text-gray-400">/Person</p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={18} className="text-gray-400" />
          <span className="text-sm font-semibold">{destination.duration}</span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link href={`/destinations/${destination._id}`}>
            <button className="flex items-center gap-1 text-cyan-500 font-bold uppercase tracking-wider text-sm hover:text-cyan-600 transition-colors">
              Book Now
              <ArrowUpRight size={20} />
            </button>
          </Link>
          <div className="h-[2px] w-20 bg-cyan-500 mt-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;


import Button from "./Button";
import { Star, MapPin, DollarSign, Briefcase, Leaf,  CircleCheck } from "lucide-react";

const Card = ({
  rank,
  name,
  location,
  price,
  reliability,
  earnings,
  lawnsMowed,
  hiredTimes,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-4 w-full sm:w-[380px] md:w-[320px] flex flex-col items-center transition-transform duration-300 hover:scale-105">
      {/* Rank */}

      {/* Profile Image */}
      <img
        src="https://img.freepik.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg?semt=ais_hybrid&w=740&q=80"
        alt="pro"
        className="w-20 h-20 rounded-full object-cover border-2 border-orange-400 mb-2"
      />

      {/* Name & Rating */}
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <div className="flex items-center text-yellow-400 my-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} fill="#FFD700" stroke="none" />
        ))}
      </div>
      <p className="text-sm text-gray-600">{reliability}% Reliability Rating</p>

      {/* Price */}
      <div className="mt-3 mb-2 bg-[#FFF7E6] px-4 py-1 rounded-md">
        <span className="text-2xl font-bold text-[#FF6F01]">${price}</span>
        <span className="text-gray-600 text-base font-medium"> / Mowing</span>
      </div>

      {/* Stats */}
      <div className="flex justify-between w-full px-2 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <DollarSign size={14} /> ${earnings.toLocaleString()} earned
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} /> {location}
        </div>
      </div>

      <div className="flex justify-between w-full px-2 text-sm text-gray-600 mt-1">
        <div className="flex items-center gap-1">
          <Leaf size={14} /> {lawnsMowed} lawns mowed
        </div>
        <div className="flex items-center gap-1">
          <Briefcase size={14} /> Hired {hiredTimes} times
        </div>
      </div>

      {/* Services */}
      <div className="w-full mt-3 border-t border-gray-200 pt-2">
        <h4 className="text-sm font-semibold text-gray-800 mb-1">
          Yard Maintenance Services offered
        </h4>
        <p className="text-sm text-green-600 flex items-center gap-1">
         <CircleCheck/> Shrub Pruning
        </p>
        <p className="text-sm text-[#FF6F01] font-medium cursor-pointer">
          View +5 Services
        </p>
      </div>

      {/* Button */}
      <div className="w-full mt-4">
        <Button className="w-full py-3">See Prices</Button>
      </div>
    </div>
  );
};

export default Card;

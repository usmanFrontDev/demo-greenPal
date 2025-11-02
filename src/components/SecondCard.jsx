import { MapPin, Calendar, DollarSign, RefreshCw } from "lucide-react";

const SecondCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden w-full sm:w-[380px] md:w-[320px] transition-transform duration-300 hover:scale-105">
      
      {/* Top Image + Price Tag */}
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAzk5MnCaK3et68sNcIYiQ4414h7R4aT_Kw&s"
          alt="yard"
          className="w-full h-48 rounded-br-2xl rounded-bl-2xl object-cover"
        />
       {/* Price Ribbon */}
<div className="absolute top-0 right-0">
  <svg
    width="95"
    height="80"
    viewBox="0 0 95 80"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-md"
  >
    {/* Main orange shape (angled inward bottom edges) */}
    <path
      d="M0 0 H95 V55 L47.5 80 L0 55 Z"
      fill="#FF6F01"
    />

    {/* Text inside the ribbon */}
    <text
      x="25"
      y="35"
      fill="white"
      fontSize="22"
      fontFamily="sans-serif"
      fontWeight="700"
    >
      $45
    </text>
    <text
      x="22"
      y="55"
      fill="white"
      fontSize="14"
      fontFamily="sans-serif"
      fontWeight="500"
    >
      /mowing
    </text>
  </svg>
</div>

        <div className="absolute top-2 left-2 bg-[#0E9E4D] text-white font-semibold text-sm px-3 py-1 rounded-md">
          GREENPAL
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Yard Cutting — Kansas City, Missouri
        </h3>

        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin size={14} className="mr-1 text-green-600" />
          Near Routine Yard Maintenance near Robertson
        </div>

        <div className="mt-3 space-y-1 text-gray-700 text-sm">
          <div className="flex items-center gap-1">
            <DollarSign size={14} className="text-green-600" />
            <span>Price:</span> <span className="font-medium">$75 per cut</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-green-600" />
            <span>Last Mowed:</span> <span className="font-medium">2 months ago</span>
          </div>
          <div className="flex items-center gap-1">
            <RefreshCw size={14} className="text-green-600" />
            <span>Service Frequency:</span> <span className="font-medium">Weekly</span>
          </div>
        </div>

        {/* Note / Description */}
        <div className="bg-gray-50 p-3 mt-4 rounded-md text-sm text-gray-700 leading-relaxed border border-gray-100">
          I want the front and sides of the house mowed twice a month, the far
          back just once a month. I do not want the inside of the fenced back
          yard mowed at this time. Let me know if you have more questions.
        </div>
      </div>
    </div>
  );
};

export default SecondCard;

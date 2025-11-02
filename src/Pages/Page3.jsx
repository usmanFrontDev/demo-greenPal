import React from 'react'
import Button from '../components/Button'
import { ChevronRight } from 'lucide-react'

const Page3 = () => {
  return (
     <div className="min-h-screen flex justify-center items-center bg-[#F7F7F7] px-4 py-12">
      <div className="w-full px-20 flex flex-col justify-start gap-2 items-center ">
        {/* Heading */}
        <h2 className="text-6xl font-bold text-center text-gray-900 leading-snug">
          Get an Instant Lawn Mowing Quote – <br />
          <span className="text-gray-800">Columbia, SC</span>
        </h2>
        <p className="text-center text-gray-500 mt-2 text-xl">
          Let AI estimate your lawn care price based on local data
        </p>

        {/* Map card */}
        <div className="relative w-1/2 h-48 bg-gray-100 rounded-2xl overflow-hidden mt-6">
          <img
            src="https://img.freepik.com/premium-vector/street-map-city-with-destination-route-vector-navigation-road-pattern-illustration_789916-8988.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-white shadow-md rounded-xl px-4 py-2 text-sm font-semibold text-gray-700">
            Zip Code: <span className="font-bold text-gray-900">29044</span>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="mt-6 space-y-6 w-1/2">
          <div>
            <label className=" font-semibold text-xl text-gray-700 block mb-1">
              How tall is your grass?
            </label>
            <select className="w-full bg-white border border-gray-300
             rounded-lg px-6 py-4 text-gray-600 text-sm focus:outline-none
              focus:ring-2 focus:ring-[#FF9C01]  appearance-none">
              <option>Less than 10" tall</option>
              <option>More than 10" tall</option>
            </select>
          </div>

          <div>
            <label className="text-xl font-semibold text-gray-700 block mb-1">
              How often are you wanting mowing
            </label>
            <select className="w-full bg-white border border-gray-300 rounded-lg px-6 
            py-4 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9C01]
            appearance-none
            ">
              <option>Every Week</option>
              <option>Every 2 Weeks</option>
              <option>Once a Month</option>
            </select>
          </div>
        </div>

        {/* Price Box */}
        <div className="mt-6 bg-[#D7F3D6] w-1/2  rounded-2xl flex flex-col gap-2 text-center py-8">
          <h3 className="text-4xl font-bold text-gray-800">$48.00/cut</h3>
          <p className="text-sm text-gray-700">
            Estimated Price for Columbia, SC.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Based on average lawn size, every week mowing
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 w-1/2">
          <Button  className=" py-4!" >
        See Prices
        <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page3
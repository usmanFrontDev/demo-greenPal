import { Phone, UserRound } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full z-50 bg-white py-4 px-8 flex sticky top-0 left-0 justify-between items-center'>
        <h2 className='font-bold text-xl'>Logo</h2>
        <div className='flex justify-start items-center gap-6'>
            <button className='transition-all duration-150 cursor-pointer py-2 px-4 flex justify-start items-center gap-1
             rounded-full bg-white border hover:border-transparent hover:shadow-lg border-[#3A647D] shadow-gray-300 text-[#3A647D] font-semibold'>
                <Phone size={18} color='#FF8602' fill='#FF8602'/>
                Class Us
            </button>
             <button className='transition-all duration-150 cursor-pointer py-2 px-4 flex justify-start items-center gap-1
             rounded-full bg-white border hover:border-transparent hover:shadow-lg shadow-lg text-[#3A647D] font-semibold'>
                <UserRound size={18} color='#3A647D' fill='#3A647D'/>
                Accounts
            </button>
        </div>
    
    </div>
  )
}

export default Header
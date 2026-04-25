import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      {/* Exchange */}
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange" />
        <p className='font-semibold'>Easy Exchange (Demo)</p>
        <p className='text-gray-400'>
          This project demonstrates how an exchange feature can be implemented in an e-commerce system.
        </p>
      </div>

      {/* Return */}
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Return" />
        <p className='font-semibold'>7 Days Return (Sample)</p>
        <p className='text-gray-400'>
          Shows a sample return policy flow for handling product returns within a fixed time period.
        </p>
      </div>

      {/* Support */}
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support" />
        <p className='font-semibold'>Customer Support System</p>
        <p className='text-gray-400'>
          Represents how customer support features can be integrated into a full-stack application.
        </p>
      </div>

    </div>
  )
}

export default OurPolicy
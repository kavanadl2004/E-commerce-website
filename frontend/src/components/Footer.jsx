import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left Section */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              This e-commerce web application is developed as a full-stack project using modern technologies. 
              It provides a smooth and user-friendly shopping experience including product browsing, cart management, 
              and secure checkout (demo). The project demonstrates practical implementation of frontend and backend integration.
            </p>
        </div>

        {/* Company Section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className='hover:text-black cursor-pointer'>Home</li>
                <li className='hover:text-black cursor-pointer'>About Us</li>
                <li className='hover:text-black cursor-pointer'>Contact</li>
                <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>

        {/* Contact Section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 74837 02247</li>
                <li>sample@gmail.com</li>
            </ul>
        </div>

      </div>

      {/* Bottom */}
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>
            © 2026 E-Commerce Project. All rights reserved.
          </p>
      </div>

    </div>
  )
}

export default Footer
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact us" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          
          <p className='font-semibold text-xl text-gray-600'>Our Location</p>
          <p className='text-gray-500'>
            Bangalore, Karnataka <br />
            India
          </p>

          <p className='text-gray-500'>
            Tel: +91 74837 02247 <br />
            Email: samaple@gmail.com
          </p>

          <p className='font-semibold text-xl text-gray-600'>About This Project</p>
          <p className='text-gray-500'>
            This is a full-stack e-commerce web application developed as a project to demonstrate 
            real-world shopping functionality including product browsing, cart management, and order processing.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Contact Support
          </button>

        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
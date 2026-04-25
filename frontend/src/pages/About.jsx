import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About us" />
          
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>
                Our e-commerce platform is a modern web application developed to provide a seamless online shopping experience. 
                This project was built as part of our learning journey to understand real-world web development using technologies 
                like React, Node.js, and MongoDB.
              </p>

              <p>
                The platform allows users to browse products, add items to cart, and place orders easily. 
                It also includes features like user authentication, responsive design, and secure payment integration (demo-based), 
                making it a complete full-stack application.
              </p>

              <b className='text-gray-800'>Our Goal</b>

              <p>
                The goal of this project is to demonstrate our ability to design and develop a scalable, user-friendly 
                e-commerce solution. It reflects our understanding of frontend and backend integration, database management, 
                and modern UI/UX practices.
              </p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Modern Tech Stack:</b>
            <p className=' text-gray-600'>
              Built using React, Node.js, Express, and MongoDB, ensuring a scalable and efficient architecture.
            </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>User-Friendly Design:</b>
            <p className=' text-gray-600'>
              Clean and responsive UI that works smoothly across devices for a better user experience.
            </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Complete Functionality:</b>
            <p className=' text-gray-600'>
              Includes essential e-commerce features like product listing, cart management, and order processing.
            </p>
          </div>

      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
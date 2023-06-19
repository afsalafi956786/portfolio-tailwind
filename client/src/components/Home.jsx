import React from 'react'
import {HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
       {/* container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 '>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Afsal</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specilizing in building  exceptional digital experiences. currently, I'm focused on 
          building responsive full-stack web applications.
        </p>
          <div className=''>
             <button className='text-white group border-2 px-6 flex items-center my-2 py-3 hover:text-lg hover:border-pink-600'>View work 
             <span className='group-hover:rotate-90 duration-300'>
               <HiArrowNarrowRight className='ml-3' />
             </span>
            </button> 
          </div>
      

       </div>
    </div>
  )
}

export default Home
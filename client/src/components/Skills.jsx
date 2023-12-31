import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

function Skills() {
  return (

    <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto  p-4 justify-center flex-col w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600   '>Experience</p>
                <p className='py-4'>//These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={HTML} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={CSS} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Javascript} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={ReactImg} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Node} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Mongo} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={FireBase} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={AWS} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={GitHub} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Tailwind} alt='htmicon'/>
                <p className='my-4 '>HTML</p>
              </div>
          

            </div>
        </div>

    </div>
  )
}

export default Skills
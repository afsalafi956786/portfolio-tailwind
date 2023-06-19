import React, { useState } from 'react'
import Logo from '../assets/logo1.png';
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaFacebook } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill } from 'react-icons/bs'
function Navbar() {
  const [nav,setNav]=useState(false)
  function handleClick(){
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
        <div   className=''>
        <img src={Logo} alt='logs' style={{width:'50px'}}/>
        </div>
        {/* //menu */}
            <ul className='hidden text-white md:flex '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
        

    {/* Hamburder */}

    <div onClick={handleClick} className='md:hidden text-white z-10 cursor-pointer'>
      {!nav ? <FaBars/> :<FaTimes/>}
       
    </div>

    {/* mobile menu */}
              <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center  text-white'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Works</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

    {/* socal icons */}
    <div className='flex fixed flex-col top-[35%] left-0 hidden lg:flex'>
       <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a  className='text-white w-full flex justify-between items-center ' href="/">Linkdedin <FaLinkedin size={30}/> </a>
      </li>

      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a  className='text-white w-full flex justify-between items-center ' href="/">Github <FaGithub size={30}/> </a>
      </li>

      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
        <a  className='text-white w-full flex justify-between items-center ' href="/">Email <HiOutlineMail size={30}/> </a>
      </li>

      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
        <a  className='text-white w-full flex justify-between items-center ' href="/">Resume <BsFillPersonLinesFill size={30}/> </a>
      </li>
    </ul>
    </div>
    


    </div>
  )
}

export default Navbar
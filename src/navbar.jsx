import React from 'react'
import {HiMenuAlt2} from 'react-icons/hi'

const Navbar = ({handleMenuClose,menuOpen}) => {
  return (
    <header className=' fixed top-0 z-[100] h-[80px] flex items-center justify-end w-full'>
  <div className={` flex items-center justify-between transition-all ease-in-out duration-500 bg-white h-full px-[4%] ${menuOpen ? `w-[80%]  md:w-[75%] lg:w-[80%]` : `w-full`}`}
  >
     <div><HiMenuAlt2 className='text-[2.3rem] text-[#2563eb] cursor-pointer' onClick={handleMenuClose}/></div>
  <h2 className='text-3xl font-semibold'>Dashboard</h2> 
  <h3 className='bg-[#2563eb] px-[0.9rem]  py-[0.4rem] text-white rounded-[10px] cursor-pointer'>Ideraoluwa Isa</h3></div>

</header>
  )
}

export default Navbar

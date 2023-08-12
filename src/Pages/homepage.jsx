import React from 'react'
import {AiOutlineDashboard} from "react-icons/ai"
import Sidebar from '../sidebar'
import Navbar from '../navbar'


const Homepage = () => {
  return (
<div className='w-full bg-gray-100 min-h-screen relative'>

<Navbar/>
<section className='w-full '>
<Sidebar/>
   <div className='absolute top-[80px] right-0 w-[80%] px-[4%] pt-[48px]'>
   <section>
    <h3 className='text-4xl font-bold'>homepage</h3>
    </section>  
        
    </div> 
   </section>

</div>
    
 
  )
}

export default Homepage

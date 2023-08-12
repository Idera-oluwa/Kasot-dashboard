import React from 'react'
import App from '../App'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

const AccountSettings = () => {
  return (
    <div className='w-full bg-gray-100 min-h-screen relative'>

    <Navbar/>
    <section className='w-full '>
    <Sidebar/>
       <div className='absolute top-[80px] right-0 w-[80%] px-[4%] pt-[48px]'>
       <section>
        <h3 className='text-4xl font-bold'>Settings</h3>
        </section>  
            
        </div> 
       </section>
    
    </div>
  

  )
}

export default AccountSettings

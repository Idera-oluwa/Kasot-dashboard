import React from 'react'
import {useNavigate} from "react-router-dom"
import {AiOutlineDashboard} from "react-icons/ai"
import {MdDashboard} from "react-icons/md"
import {FiSettings} from "react-icons/fi"

const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div className='w-[20%] h-screen absolute top-0 z-[200] border-l border-l-gray-500 bg-white flex flex-col items-center'>
      <div className='mt-6 flex flex-row items-center justify-center gap-[0.5rem]'>
        <div className='w-[3rem] h-[3rem] bg-[#3498db] flex justify-center items-center text-white text-[2rem] rounded-[20%] font-bold'>K</div>
        <h2 className='text-xl font-bold text-[2rem] text-[#3498db]'>Kasot</h2>
      </div>
    <ul className='flex flex-col gap-10 mt-10 items-start'>
      <div className='flex gap-4 items-center cursor-pointer' onClick={()=>navigate("/")}><MdDashboard/><span className="text-lg">Dashboard</span></div>
      <div className='flex gap-4 items-center cursor-pointer' onClick={()=>navigate("/orders")}><AiOutlineDashboard/><span className="text-lg">Order Management</span></div>
      <div className='flex gap-4 items-center cursor-pointer' onClick={()=>navigate("/design-management")}><AiOutlineDashboard/><span className="text-lg">Design</span></div>
      <div className='flex gap-4 items-center cursor-pointer' onClick={()=>navigate("/settings")}><FiSettings/><span className="text-lg">Account Settings</span></div>
    </ul>
     </div>
  )
}

export default Sidebar

import React,{useState} from 'react'
import App from '../App'
import Address from '../Address'

const AccountSettings = ({menuOpen}) => {
  const [toggle, setToggle] = useState(false)
  const handleToggleChange =()=>{
    setToggle(!toggle)
  }
  return (
    <div className='w-full bg-gray-100 overflow-visible min-h-screen'>

    <section className='w-full min-h-screen'>
       <div className={`absolute top-[80px] right-0 px-[4%] pt-[48px] min-h-screen bg-gray-100 transition-all ease-in-out duration-500  ${menuOpen ? `w-full  md:w-[75%] lg:w-[80%]` : `w-[70%] mx-auto left-0`}`}>
       <section className='bg-gray-100 px-[2rem]  py-[3rem]'>
        <h3 className='text-4xl font-bold'>Settings</h3>
        <h3 className='text-3xl font-semibold mt-[2rem]'>Profile</h3>
        <form className='mt-[1rem]'>
          <div className='flex flex-row gap-[1rem]'>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>First Name:</label>
          <input type='text' name='name1' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>Last Name:</label>
          <input type='text' name='name2' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          </div>
          <div className='flex flex-col mt-[1rem]'>
          <label htmlFor='name' className=''>Email:</label>
          <input type='text' name='email' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[37rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col mt-[1rem]'>
          <label htmlFor='name' className=''>Contact:</label>
          <input type='text' name='contact' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[37rem] h-[40px] rounded-md'/>
          </div>
        </form>
        <Address/>
        <h3 className='text-3xl font-semibold mt-[2rem]'>Password</h3>
        <form className='mt-[1rem]'>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>Current Password:</label>
          <input type='text' name='name1' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[27rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col mt-[1rem]'>
          <label htmlFor='name' className=''>New Password:</label>
          <input type='text' name='email' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[27rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col mt-[1rem]'>
          <label htmlFor='name' className=''>Confirm New Password:</label>
          <input type='text' name='contact' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[27rem] h-[40px] rounded-md'/>
          </div>
        </form>
        <div>
        <h3 className='text-3xl font-semibold mt-[2rem]'>Preference</h3>
        <div className='flex flex-row gap-[2rem] items-center'>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Stay updated on promotions and exclusive offers</span>
        <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" checked={toggle} onChange={handleToggleChange} />
  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
</div>
        <button className='bg-[#3498db] mt-[2rem] px-[2rem] py-[0.7rem] text-white text-[1.2rem] font-semibold rounded-[10px]'>Save Changes</button>
        </section>  
            
        </div> 
       </section>
    
    </div>
  

  )
}

export default AccountSettings

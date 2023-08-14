import React,{useState} from 'react'

const Address = () => {
    const [toggle, setToggle] = useState(false)
  const handleToggleChange =()=>{
    setToggle(!toggle)
  }
  return (
    <div>
   <h3 className='text-3xl font-semibold mt-[2rem]'>Address Book</h3>
        <form className='mt-[1rem]'>
        <div className='flex flex-col mt-[1rem]'>
          <label htmlFor='name' className=''>Address Line:</label>
          <input type='text' name='contact' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[37rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-row gap-[1rem] mt-[1rem]'>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>City:</label>
          <input type='text' name='name1' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>State:</label>
          <input type='text' name='name2' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          </div>
          <div className='flex flex-row gap-[1rem] mt-[1rem]'>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>Zip Code:</label>
          <input type='text' name='name1' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>Country:</label>
          <input type='text' name='name2' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          </div>
          <div className='flex flex-row gap-[2rem] items- mt-[0.7rem]'>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Preferred Shipping Address</span>
        <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" checked={toggle} onChange={handleToggleChange} />
  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
            <button className='bg-[#ff0000ba] text-white font-[1rem] px-[1.5rem] py-[0.5rem] rounded-[15px] mt-[1rem]'>DELETE</button>
        </form>
        <form className='mt-[1rem]'>
        <div className='flex flex-col mt-[1rem]'>
          <label htmlFor='name' className=''>Address Line:</label>
          <input type='text' name='contact' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[37rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-row gap-[1rem] mt-[1rem]'>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>City:</label>
          <input type='text' name='name1' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>State:</label>
          <input type='text' name='name2' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          </div>
          <div className='flex flex-row gap-[1rem] mt-[1rem]'>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>Zip Code:</label>
          <input type='text' name='name1' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='name' className=''>Country:</label>
          <input type='text' name='name2' className='border-2 border-[#dbeafe] bg-[#eff6ff] w-[18rem] h-[40px] rounded-md'/>
          </div>
          </div>
          <div className='flex flex-row gap-[2rem] items- mt-[0.7rem]'>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Preferred Shipping Address</span>
        <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" checked={toggle} onChange={handleToggleChange} />
  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
            <button className='bg-[#ff0000ba] text-white font-[1rem] px-[1.5rem] py-[0.5rem] rounded-[15px] mt-[1rem]'>DELETE</button>
        </form>
        <button className='bg-[#2563eb] text-white font-[1rem] px-[1.5rem] py-[0.5rem] rounded-[15px] ml-[31rem]'>ADD</button>
    </div>
  )
}

export default Address

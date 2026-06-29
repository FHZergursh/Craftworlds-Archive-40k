import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-900 h-[9vh] p-2 mb-2 flex'>
      <div className=' w-full flex justify-start items-center gap-50'>

        <div className='h-full w-[15%] flex justify-center items-center'>
          <h1 className='text-blue-500 text-xl'>Craftworlds Archive 40K</h1>
        </div>

        <div className='flex gap-30'>
          <div className='text-blue-300'>Blogs</div>
          <div className='text-blue-300'>Tutorials</div>
          <div className='text-blue-300'>Units</div>
          <div className='text-blue-300'>Other resources </div>
          <div></div>
        </div>

        <div className='text-gray-400 text-xs'>Contact me </div>



      </div>
      

    </div>
  )
}

export default Header
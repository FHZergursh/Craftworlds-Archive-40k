import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='bg-gray-900 h-[9vh] p-2 mb-2 flex'>
      <div className=' w-full flex justify-start items-center gap-50'>

        <div className='h-full w-[15%] flex justify-center items-center'>
          <h1 className='text-blue-500 text-xl'>Craftworlds Archive 40K</h1>
        </div>

        <div className='flex gap-30'>
          <Link to={"/blogs"} className='text-blue-300'>Blogs</Link>
          <Link to={"/tutorials"} className='text-blue-300'>Tutorials</Link>
          <Link to={"/units"} className='text-blue-300'>Units</Link>
          <Link to ={"/resources"} className='text-blue-300'>Other resources </Link>
        </div>

        <div className='text-gray-400 text-xs'>Contact me</div>



      </div>
      

    </div>
  )
}

export default Header
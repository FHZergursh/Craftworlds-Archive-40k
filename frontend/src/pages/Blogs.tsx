import React from 'react'
import BlogCard from '../components/BlogCard';
import { BlogDummyData } from '../data/dummyData';


const Blogs = () => {
  return (
    <div className='flex justify-center h-auto mt-5'>
      <div className='flex flex-col gap-10 w-[80vw] justify-center items-center'>
      {BlogDummyData.map(item => ( 
        <div key={item.BlogId} className='bg-gray-400'>
          <BlogCard blog={item} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Blogs
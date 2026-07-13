import React from 'react'
import type { Blog } from '../types/blogs.tsx';

interface TodoListProps {
  blog: Blog;
}

const BlogCard = ({blog}: TodoListProps) => {
  return (
    <div className='flex flex-col bg-gray-400 w-[30vw] h-[30vh]'>
      <div className='bg-zinc-500 h-[20%] flex justify-center border-b-2'>
        <h1 className='text-3xl'>
          {blog.title}
        </h1>
      </div>
      <div className='bg-zinc-400 h-[70%] flex justify-center items-center'>
        <img src={blog.imageUrl} />
      </div>
      <div className='bg-zinc-400 h-[10%] pl-2'>
        Tags: 
        <label className='text-slate-300 ml-2'>
          {blog.tags}
        </label>
      </div>
    </div>
  )
}

export default BlogCard
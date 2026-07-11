import React from 'react'
import BlogCard from '../components/BlogCard';
import { BlogDummyData } from '../data/dummyData';


const Blogs = () => {
  return (
    <div>
      {BlogDummyData.map(item => ( 
        <li key={item.BlogId}>
          <BlogCard data={BlogDummyData} />
        </li>
      ))}

    </div>
  )
}

export default Blogs
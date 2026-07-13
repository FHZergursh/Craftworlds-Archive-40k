import React from 'react'
import type { Blog } from '../types/blogs.tsx';

interface TodoListProps {
  blog: Blog;
}

const BlogCard = ({blog}: TodoListProps) => {
  return (
    <div>
      {blog.title}
    </div>
  )
}

export default BlogCard
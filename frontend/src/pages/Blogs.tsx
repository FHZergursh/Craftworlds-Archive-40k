import React, { useEffect, useState } from "react";
import type { Blog } from "../types/blogs";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs/");
        const result = await response.json();
        setBlogs(result.data);
        console.log("Fetched data: ", result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs()
  }, []);



  return (
    <div className="h-auto w-full flex flex-col items-center">
      <div className="mb-2 ">
        <h1 className="text-4xl">Blogs</h1>
      </div>
      <div className="flex gap-10 w-[80vw] columns-2 ml-[10vw]">
        <div className="w-full h-full grid grid-cols-2 gap-y-8">
            {blogs ? (
              blogs.map((index) => <div>
                <BlogCard blog={index} />
              </div>)
            ) : (
              <div>loading...</div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Blog } from "../types/blogs";
import BlogCard from "../components/BlogCard";

const SelectedBlog = () => {
  const { blogid } = useParams();
  console.log(blogid);

  const [blog, setBlog] = useState<Blog[]>([]); //for some reason it returns as an array, low priority fix

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/blogs/${blogid}`,
        );
        const result = await response.json();
        setBlog(result.data);
        console.log("Fetched data: ", result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [blogid]);

  return (
    <div>
      <div className="">
        {blog ? (
          blog.map((index) => (
            <div key={index.blogid}>
              <div>Title is: {index.title} </div>
              <div>Tags are: {index.tags} </div>
              <div>Content is: {index.content} </div>
            </div>
          ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default SelectedBlog;

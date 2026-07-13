import React from "react";
import BlogCard from "../components/BlogCard";
import { BlogDummyData } from "../data/dummyData";

const Blogs = () => {
  return (
    <div className="flex justify-center h-auto mt-5 ml-15">
      <div className="flex gap-10 w-[80vw] columns-2">
        <div className=" w-full h-full grid grid-cols-2 gap-y-8">
          {BlogDummyData.map((item) => (
            <div key={item.BlogId} className="">
              <BlogCard blog={item} />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Blogs;

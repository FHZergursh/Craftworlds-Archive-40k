import express from "express"
import { createBlog, DeleteBlog, getAllBlogs, updateBlog } from "../controllers/blogControllers"

const blogRouter = express.Router()

blogRouter.post("/", createBlog)
blogRouter.get("/", getAllBlogs)
blogRouter.put("/:id", updateBlog)
blogRouter.delete("/:id", DeleteBlog)



export default blogRouter
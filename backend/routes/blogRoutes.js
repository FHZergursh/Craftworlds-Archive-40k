import express from "express"
import { createBlog, DeleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/blogControllers.js"

const blogRoutes = express.Router()

blogRoutes.post("/", createBlog)
blogRoutes.get("/", getAllBlogs)
blogRoutes.get("/:id", getBlog)
blogRoutes.put("/:id", updateBlog)
blogRoutes.delete("/:id", DeleteBlog)



export default blogRoutes
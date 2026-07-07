import { sql } from "../db/setupDB.js"

export const createBlog = async (req, res) => {
  try {
    const {title, tags, imageUrl, content} = req.body

    if (!title || !content) //image and tags are optional
    {
      return res.status(400).json({success: false, message: "Missing mandatory fields!"})
    }

    //don't need to check if exists, as blogs can share a name and content

    const blog = await sql.query("INSERT INTO blog (title, tags, imageUrl, content) VALUES ($1, $2, $3, $4)", 
      [title, tags, imageUrl]
    )



  } catch (error) {
    console.log("Error in createBlog, ", error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await sql.query("SELECT * FROM blogs")
    return res.status(200).json({success: true, message: blogs})

  } catch (error) {
    console.log("Error in getAllBlogs, ", error)
    return res.status(400).json({success: false, message: error})
  }



  return res.json("endpoint test")
}

export const updateBlog = async (req, res) => { //dedicated api for tag change might make future easier
  try {

  } catch (error) {
    console.log("Error in updateBlog, ", error)
    return res.status(400).json({success: false, message: error})
  }
}

export const DeleteBlog = async (req, res) => {
  try {

  } catch (error) {
    console.log("Error in DeleteBlog, ", error)
    return res.status(400).json({success: false, message: error})
  }
}


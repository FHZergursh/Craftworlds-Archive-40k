import { sql } from "../db/setupDB.js"

export const createBlog = async (req, res) => {
  try {
    const {title, tags, imageUrl, content} = req.body

    if (!title || !content) //image and tags are optional
    {
      return res.status(400).json({success: false, message: "Missing mandatory fields!"})
    }

    //don't need to check if exists, as blogs can share a name and content

    const blog = await sql.query(`INSERT INTO blogs (title, tags, imageUrl, content) VALUES ($1, $2, $3, $4)`, 
      [title, tags, imageUrl, content]
    )

    

    return res.status(200).json({success: true, message: blog})



  } catch (error) {
    console.log("Error in createBlog, ", error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await sql.query(`SELECT * FROM blogs`)
    return res.status(200).json({success: true, message: blogs})

  } catch (error) {
    console.log("Error in getAllBlogs, ", error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getBlog = async (req, res) => {
  //this needs doing
  try {
    const {id} = req.params

    if (!id)
    {
      return res.status(400).json({success: false, message: "Please provide an ID to be searched"})
    }

    const blog = await sql.query(`SELECT * FROM blogs WHERE blogId = $1`, [id]);
    return res.status(200).json({success: true, message: blog})

  } catch (error) {
    console.log("Error in getAllBlogs, ", error)
    return res.status(400).json({success: false, message: error})
  }


  return res.json("endpoint test")
}

export const updateBlog = async (req, res) => { //dedicated api for tag change might make future easier
  try {
    const {id} = req.params
    const {title, tags, imageUrl, content} = req.body

    if (!title && !tags && !imageUrl && !content) //no update values provided
    {
      return res.status(400).json({success: false, message: "Missing fields provided for update. Data unchanged."})
    }

    const exists = await sql.query(`SELECT * FROM blogs WHERE blogId = $1`, [id])
    const len = exists.length 
    if (len = 0) //array returned is empty, aka no account found
    {
      return res.status(400).json({success: false, message: "Missing fields provided for update. Data unchanged."})
    }
    else //found the id
    {
      const updated = await sql.query(`UPDATE blogs SET title = $1, tags = $2, imageUrl = $3, content = $4 WHERE blogId = $5`, 
      [title, tags, imageUrl, content, id ])
      return res.status(200).json({success: true, message: updated})

    }

  } catch (error) {
    console.log("Error in updateBlog, ", error)
    return res.status(400).json({success: false, message: error})
  }
}

export const DeleteBlog = async (req, res) => {
  try {
    const {id} = req.params

    if (!id)
    {
      return res.status(400).json({success: false, message: `Missing ID! Provide the ID of the field you want deleted.`})
    }

    const deleted = await sql.query(`DELETE FROM blogs WHERE blogId = $1`, [id])
    return res.status(200).json({success: true, message: deleted})

  } catch (error) {
    console.log("Error in DeleteBlog, ", error)
    return res.status(400).json({success: false, message: error})
  }
}


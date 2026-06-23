import { sql } from "../db/db.js"

export const getAllUnits = async (req, res) => {
  try {
    const result = await sql.query(`SELECT * FROM unittable`)
    return res.status(200).json({success: true, message: result})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
  
}

export const GetUnit = async (req, res) => {
  try {
    const id = req.params
    if (!id) {
    return res.status(400).json({success: false, message: "Please provide a valid ID"})
    }

    const result = await sql.query("SELECT * FROM unittable WHERE id = $1", [id])

    return res.status(200).json({success: true, message: result})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const CreateUnit = async (req, res) => {
  try {
    const {name, category, pointcost, legends} = req.body //legends is a bool, watch out)

    if (!name || !category || !pointcost || !legends)
    {
      return res.status(400).json({success: false, message: "Missing fields! Make sure to include all data"})
    }

    const created = await sql.query("INSERT INTO unittable (name, category, pointcost, legends) VALUES ($1, $2, $3, $4) ", [name, category, pointcost, legends])
    
    return res.status(200).json({success: true, message: created})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const UpdateUnit = async (req, res) => {
  try {
    try {
      const {id} = req.params

      if (!id) 
      {
      return res.status(400).json({success: false, message: "Missing fields! Make sure to include all data"})
      }

      const deleted = await sql.query("DELETE FROM unittable WHERE id = $1", [id])

      return res.status(200).json({success: true, message: deleted})

    } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
    }

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }

}

export const DeleteUnit = async (req, res) => {
  try {
    const {id} = req.params

    if (!id) {
      return res.status(400).json({success: false, message: "Missing ID"})
    }

    const deleted = await sql.query("DELETE FROM unittable WHERE id = $1", [id])
    
  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

import express from "express"
const tableRouter = express.Router()

tableRouter.get('/', (req, res) => {
  res.send("Route successful")
})

export default tableRouter
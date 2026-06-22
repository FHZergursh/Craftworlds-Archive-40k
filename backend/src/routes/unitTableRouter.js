import express from "express"
import { CreateUnit, DeleteUnit, getAllUnits, UpdateUnit } from "../controller/unitTableController.js"
const tableRouter = express.Router()

tableRouter.post("/", CreateUnit)
tableRouter.get('/', getAllUnits)
tableRouter.patch("/:id", UpdateUnit)
tableRouter.delete("/:id", DeleteUnit)

export default tableRouter
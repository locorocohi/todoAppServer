import express from "express";
import todos from './todos'
const mainRouter = express.Router()

mainRouter.use('/todos', todos)

export default mainRouter
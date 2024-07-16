import express from "express";
import { AppDataSource } from "../db/data-source";
import { addTask, deleteTask } from "../controllers/todosController";

const router = express.Router()
const todosRepo = AppDataSource.getRepository('Todos')

router.get('/', (req, res) => {
  res.send('Я тут')
})

router.post('/create', addTask)

router.post('/:id/delete', deleteTask)
export default router
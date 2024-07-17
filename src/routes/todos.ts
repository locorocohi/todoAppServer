import express from "express";
import { AppDataSource } from "../db/data-source";
import { addTask, deleteTask } from "../controllers/todosController";

const router = express.Router()
const todosRepo = AppDataSource.getRepository('Todos')

router.post('/', async (req, res) => {
  const task = {
    id: Date.now(),
    text:'test',
    completed: false
  }
  const results = await AppDataSource.manager.save(task)
  return res.send(results)
})

router.post('/create', addTask)

router.post('/:id/delete', deleteTask)
export default router
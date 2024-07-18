import express from "express";
import { 
  addTask, 
  editTask, 
  findTaskById, 
  getArrayWithTodos, 
  deleteTask, 
  deleteCompleted } from "../controllers/todosController";

const router = express.Router()

router.get('/', getArrayWithTodos)
router.get('/:id', findTaskById)
router.put('/:id', editTask)
router.delete('/:id', deleteTask)
router.delete('/clearCompleted', deleteCompleted)
router.post('/create', addTask)

export default router

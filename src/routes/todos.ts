import express from "express";
import { completeAllTasks } from "../controllers/completeAllTasks";
import { getArrayWithTodos } from "../controllers/getAllTasks";
import { findTaskById } from "../controllers/findTaskById";
import { editTask } from "../controllers/editTaskText";
import { deleteTask } from "../controllers/deleteTask";
import { deleteCompleted } from "../controllers/deleteCompleted";
import { addTask } from "../controllers/addTask";
import { completeTask } from "../controllers/completeTask";


const router = express.Router()

router.get('/', getArrayWithTodos)
router.get('/:id', findTaskById)
router.patch('/edit/:id', editTask)
router.delete('/:id', deleteTask)
router.delete('/remove/completed', deleteCompleted)
router.post('/create', addTask)
router.patch('/complete/:id', completeTask)
router.patch('/complete/all/tasks', completeAllTasks)

export default router;

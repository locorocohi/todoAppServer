import express from "express";
import controller from "../controllers/todosController";


const router = express.Router()

router.get('/', controller.getAllTasks)
router.get('/find/:id', controller.findTaskById)
router.delete('/:id', controller.deleteTask)
router.delete('/remove/completed', controller.deleteCompleted)
router.post('/create', controller.addTask)
router.patch('/edit/:id', controller.editTaskText)
router.patch('/complete/:id', controller.completeTask)
router.patch('/complete/all/tasks', controller.completeAllTasks)

export default router;

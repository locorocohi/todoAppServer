import express from "express";
import { addTask } from "../controllers/todosController";

const router = express.Router()

router.get('/', async (req, res) => {
  res.send('results')
})

router.post('/create', addTask)

export default router
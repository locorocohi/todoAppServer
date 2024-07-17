import express from "express";
import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";

const router = express.Router()

router.post('/', async (req, res) => {
  const task = {
    id: Date.now(),
    text:'test',
    completed: false
  }
  const results = await AppDataSource.manager.save(task)
  return res.send(results)
})

export default router
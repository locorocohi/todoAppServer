import { findTaskByIdAndThrow } from "../services";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { todosRepo } from "../db";

export const completeTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const currTask = await findTaskByIdAndThrow(taskId);
  const t1 = await todosRepo.find();
  console.log(t1);
  currTask.completed = !currTask.completed;
  const savedTodo = await todosRepo.save(currTask);
  const t2 = await todosRepo.find();
  console.log(t2);
  res.status(200).json(savedTodo);
})
import { findTaskByIdAndThrow } from "../services";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { todosRepo } from "../db";

export const completeTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const currTask = await findTaskByIdAndThrow(taskId);

  currTask.completed = !currTask.completed;
  const savedTodo = await todosRepo.save(currTask);
  res.status(200).json(savedTodo);
})
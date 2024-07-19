import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { todosRepo } from "../db";

export const deleteTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const deletedTask = await todosRepo.delete(taskId);
  res.status(204).json(deletedTask);
})
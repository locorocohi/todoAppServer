import { findCompletedAndThrow } from "../services";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { todosRepo } from "../db";

export const deleteCompleted: RequestHandler = asyncHandler(async (req, res, next) => {
  const completedTasks = await findCompletedAndThrow()
  const deletedTasks = await todosRepo.remove(completedTasks)
  res.status(204).json(deletedTasks);
})
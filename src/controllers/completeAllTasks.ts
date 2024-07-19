import { findAllAndThrow, toggleCompleteAll } from "../services";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";


export const completeAllTasks: RequestHandler = asyncHandler(async (req, res, next) => {
  const todosArr = await findAllAndThrow();
  const updatedTodosArr = await toggleCompleteAll(todosArr)
  res.status(200).json(updatedTodosArr);
})
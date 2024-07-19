import { CustomError } from "../errors/customError";
import { todosRepo } from "../db";
import { findTaskByIdAndThrow } from "../services";
import errorsConstants from "../errors/errorsConstants";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";



export const editTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const currTask = await findTaskByIdAndThrow(taskId);

  if(!req.body.text) {
    throw new CustomError(errorsConstants.BAD_REQUEST)
  };

  currTask.text = req.body.text;
  const savedTodo = await todosRepo.save(currTask);
  res.status(200).json(savedTodo);
})
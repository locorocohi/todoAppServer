import { findTaskByIdAndThrow } from "../services";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";

export const findTaskById: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const currTask = await findTaskByIdAndThrow(taskId);
  res.json(currTask);
})
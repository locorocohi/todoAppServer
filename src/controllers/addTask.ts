import { RequestHandler } from "express";
import { createTaskAndThrow } from "../services";
import asyncHandler from "express-async-handler";

export const addTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const savedTodo = await createTaskAndThrow(req);
  res.status(200).json(savedTodo);
})
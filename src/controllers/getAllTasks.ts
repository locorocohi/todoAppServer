import { findAllAndThrow } from "../services";
import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";

export const getArrayWithTodos: RequestHandler = asyncHandler(async (req, res, next) => {
  const todosArr = await findAllAndThrow()
  res.status(200).json(todosArr);
})
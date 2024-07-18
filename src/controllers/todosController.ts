import { todosRepo } from "../db";
import type { RequestHandler } from 'express';
import asyncHandler from "express-async-handler";
import { CustomError } from "../errors/customError";
import errorsConstants from "../errors/errorsConstants";
import { findTaskByIdAndThrow, createTaskAndThrow, deleteSomeItems } from "../services";

export const addTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const savedTodo = await createTaskAndThrow(req);
  res.status(200).json(savedTodo);
})


export const getArrayWithTodos: RequestHandler = asyncHandler(async (req, res, next) => {
  const todosArr = await todosRepo.find()
  if(!todosArr.length) {
    throw new CustomError(errorsConstants.NOT_FOUND)
  };
  res.status(200).json(todosArr);
})


export const findTaskById: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const currTask = await findTaskByIdAndThrow(taskId);
  res.json(currTask);
})

export const editTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const currTask = await findTaskByIdAndThrow(taskId);

  if(!req.body.text && !req.body.completed) {
    throw new CustomError(errorsConstants.BAD_REQUEST)
  };

  currTask.text = req.body.text ?? currTask.text;
  currTask.completed = req.body.completed;

  const savedTodo = await todosRepo.save(currTask);
  res.status(200).json(savedTodo);
})

export const deleteTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id;
  const deletedTask = await todosRepo.delete(taskId);
  res.status(204).json(deleteTask);
})

export const deleteCompleted: RequestHandler = asyncHandler(async (req, res, next) => {
  const completedTasks = await todosRepo.find({where: {completed: true},})

  if (!completedTasks.length) {
    throw new CustomError(errorsConstants.NOT_FOUND);
  }

  // await deleteSomeItems(completedTasks)
  completedTasks.forEach(async (item) => {
    await todosRepo.delete(item)
  })

  res.status(204);
})
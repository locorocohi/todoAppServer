import { Todo } from "../db/entity/Todo";
import { todosRepo } from "../db";
import type { RequestHandler } from 'express';
import asyncHandler from "express-async-handler";
import { CustomError } from "../errors/customError"

export const addTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const newTodo = new Todo();
  newTodo.text = req.body.text;
  newTodo.completed = req.body.completed;
  if(!req.body.text || !req.body.completed) {
    throw new CustomError({statusCode: 400, message: `Required property "text" or "completed" not entered`})
  }
  await todosRepo.save(newTodo)
  res.json('Done!')
})

export const getArrayWithTodos: RequestHandler = asyncHandler(async (req, res, next) => {
  const todosArr = await todosRepo.find()
  if(todosArr.length === 0) {
    throw new CustomError({statusCode: 404, message: `There are not any tasks`})
  }
  res.json(todosArr)
})

export const findTaskById: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id
  const currTask = await todosRepo.findOneBy({id: taskId})
  if(!currTask) {
    throw new CustomError({statusCode: 404, message: `Task with id:${taskId} not found!`})
  }
  res.json(currTask)
})

export const editTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id
  const currTask = await todosRepo.findOneBy({id: taskId})
  currTask.text = req.body.text
  await todosRepo.save(currTask)
  res.json(currTask)
})

export const deleteTask: RequestHandler = asyncHandler(async (req, res, next) => {
  const taskId = req.params.id
  await todosRepo.delete(taskId)
  res.json('Task deleted')
})

export const deleteCompleted: RequestHandler = asyncHandler(async (req, res, next) => {
  const completedTasks = await todosRepo.find({where: {completed: true},})
  if(completedTasks.length) {
    completedTasks.forEach(async item => {
      await todosRepo.delete(item)
    })
  }
  res.json('Completed were deleted')
})
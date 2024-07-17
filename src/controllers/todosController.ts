import { Todo } from "../db/entity/Todo";
import { todosRepo } from "../db";

export const addTask = async (req, res, next) => {
  try {
    const newTodo = new Todo();
    newTodo.text = req.body.text;
    newTodo.completed = req.body.completed;
    await todosRepo.save(newTodo)
    res.json('Done!')

  } catch(err) {
    console.log(err)
    next()
  }
}

export const getArrayWithTodos = async (req, res, next) => {
  try {
    const todosArr = await todosRepo.find()
    res.json(todosArr)

  } catch (err) {
    console.log(err)
    next()
  }
}

export const findTaskById = async (req, res, next) => {
  try {
    const taskId = req.params.id
    const currTask = await todosRepo.findOneBy({id: taskId})
    res.json(currTask)

  } catch (err) {
    console.log(err)
    next()
  }
}

export const editTask = async (req, res, next) => {
  try {
    const taskId = req.params.id
    const currTask = await todosRepo.findOneBy({id: taskId})
    currTask.text = req.body.text
    await todosRepo.save(currTask)
    res.json(currTask)

  } catch (err) {
    console.log(err)
    next()
  }
}

export const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id
    await todosRepo.delete(taskId)
    res.json('Task deleted')

  } catch (err) {
    console.log(err)
    next()
  }
}

export const deleteCompleted = async (req, res, next) => {
  try {
    const completedTasks = await todosRepo.find({where: {completed: true},})
    if(completedTasks.length) {
      completedTasks.forEach(async item => {
        await todosRepo.delete(item)
      })
    }
    res.json('Completed were deleted')

  } catch (err) {
    console.log(err)
    next()
  }
}
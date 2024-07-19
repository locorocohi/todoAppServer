import { todosRepo } from "./db";
import { CustomError } from "./errors/customError";
import errorsConstants from "./errors/errorsConstants";
import { Todo } from "./db/entity/Todo";
import { TodoType } from "./models/Todo";

export const findTaskByIdAndThrow = async (id) => {
  const currTask = await todosRepo.findOneBy({id: id});
  if(!currTask) {
    throw new CustomError(errorsConstants.NOT_FOUND)
  }
  return currTask;
}


export const createTaskAndThrow = async (req) => {

  if(!req.body.text) {
    throw new CustomError(errorsConstants.BAD_REQUEST)
  }

  const newTodo = new Todo();
  newTodo.text = req.body.text;
  newTodo.completed = req.body.completed ?? false;
  const savedTodo = await todosRepo.save(newTodo)

  return savedTodo;
}


export const findCompletedAndThrow = async (): Promise<TodoType[]> => {
  const completedTasks = await todosRepo.find({where: {completed: true},})
  
  if (!completedTasks.length) {
    return [];
  }

  return completedTasks;
}


export const findAllAndThrow = async () => {
  const todosArr = await todosRepo.find({
    order: { 
    id: 'ASC'
  }})
  
  if(!todosArr) {
    throw new CustomError(errorsConstants.NOT_FOUND)
  };

  return todosArr;
}

export const toggleCompleteAll = async (array) => {
  const isSomeTasksCompleted = array.some((item) => !item.completed);
  const result = []
  for (let i = 0; i < array.length; i+=1) {
    let item  = array[i]
    item.completed = isSomeTasksCompleted
    result[i] = await todosRepo.save(item)
  }

  return result;
}
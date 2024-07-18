import { todosRepo } from "./db";
import { CustomError } from "./errors/customError";
import errorsConstants from "./errors/errorsConstants";
import { Todo } from "./db/entity/Todo";

export const findTaskByIdAndThrow = async (id) => {
  const currTask = await todosRepo.findOneBy({id: id});
  if(!currTask) {
    throw new CustomError(errorsConstants.NOT_FOUND)
  }
  return currTask;
}


export const createTaskAndThrow = async (req) => {

  if(!req.body.text || !req.body.completed) {
    throw new CustomError(errorsConstants.BAD_REQUEST)
  }

  const newTodo = new Todo();
  newTodo.text = req.body.text;
  newTodo.completed = req.body.completed;
  const savedTodo = await todosRepo.save(newTodo)

  return savedTodo;
}

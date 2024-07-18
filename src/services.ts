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

  if(!req.body.text) {
    throw new CustomError(errorsConstants.BAD_REQUEST)
  }

  const newTodo = new Todo();
  newTodo.text = req.body.text;
  newTodo.completed = req.body.completed ?? false;
  const savedTodo = await todosRepo.save(newTodo)

  return savedTodo;
}


export const deleteSomeItems = async (arrayWithPromices) => {
  for(const item of arrayWithPromices) {
    const deletedItem = await todosRepo.delete(item)
    if(deletedItem) {
      throw new CustomError(errorsConstants.NOT_FOUND)
    }
  }
}
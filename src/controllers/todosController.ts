import { Todo } from "../db/entity/Todo";
import { todosRepo } from "../db";

export const addTask = async (req, res) => {
  const newTodo = new Todo();

  newTodo.text = req.body.text;
  newTodo.completed = req.body.completed;

  await todosRepo.save(newTodo)
  res.send('well done')
}

export const deleteTask = (req, res) => {
  res.send('Task was deleted')
}
import { Todo } from "../db/entity/Todo";
import { todosRepo } from "../db";

export const addTask = async (req, res, next) => {
  try {
  console.log(req.quary)
  const newTodo = new Todo();

  newTodo.text = req.body.text;
  newTodo.completed = req.body.completed;

  await todosRepo.save(newTodo)
  } catch(err) {
    console.log(err)
    next()
  }
}

// export const deleteTask = (req, res) => {
//   res.send('Task was deleted')
// }
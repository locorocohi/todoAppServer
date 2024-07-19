import { addTask } from "./addTask";
import { getArrayWithTodos } from "./getAllTasks";
import { findTaskById } from "./findTaskById";
import { editTask } from "./editTaskText";
import { completeTask } from "./completeTask";
import { deleteTask } from "./deleteTask";
import { deleteCompleted } from "./deleteCompleted";
import { completeAllTasks } from "./completeAllTasks";

export default {
  addTask: addTask,
  getAllTasks: getArrayWithTodos,
  findTaskById: findTaskById,
  editTaskText: editTask,
  completeTask: completeTask,
  deleteTask: deleteTask,
  deleteCompleted: deleteCompleted,
  completeAllTasks: completeAllTasks,
}
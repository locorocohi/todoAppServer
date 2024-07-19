import { AppDataSource } from "./data-source"
import { Todo } from "./entity/Todo"

export const todosRepo = AppDataSource.getRepository(Todo)

import { AppDataSource } from "./data-source"

export const todosRepo = AppDataSource.getRepository('Todos')

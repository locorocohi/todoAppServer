import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/Todo"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5000,
    username: "artem_admin",
    password: "fusion",
    database: "todos",
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})

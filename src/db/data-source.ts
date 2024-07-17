import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/Todo"
import config from '../config'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name,
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})

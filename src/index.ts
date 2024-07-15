import { AppDataSource } from "./data-source"
import { Todo } from "./entity/Todo"
import app from "./app"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const task = new Todo()
    task.completed = false
    await AppDataSource.manager.save(task)
    console.log("Saved a new user with id: " + task.id)

    console.log("Loading users from the database...")
    const tasks = await AppDataSource.manager.find(Todo)
    console.log("Loaded users: ", tasks)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

app.listen(5000, () => {
    console.log('Сервер работает на 5000')
})

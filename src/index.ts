import { AppDataSource } from "./data-source"
import app from "./app"

AppDataSource
    .initialize()
    .then(async () => {
        console.log('Data Source has been initialized!')
}).catch(error => console.log(error))


app.listen(5000, () => {
    console.log('Сервер работает на 5000')
})

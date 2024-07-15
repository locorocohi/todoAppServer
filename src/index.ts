import express from "express"

const PORT = 5000
const app = express()

app.get('/', (request, response) => {
    response.status(200).json('Server works')
})
app.listen(PORT, () => console.log('Server started on port :' + PORT))
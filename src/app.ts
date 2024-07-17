import mainRouter from "./routes/mainRouter";
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use('/api', mainRouter);

export default app;

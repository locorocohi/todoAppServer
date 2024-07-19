import mainRouter from "./routes/mainRouter";
import express from 'express'
import myOwnErrorHandler from './errors/errorHandler'
import cors  from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/api', mainRouter);
app.use(myOwnErrorHandler)

export default app;

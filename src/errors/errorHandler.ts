import { CustomError } from "./customError"

export default (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode)
    .json({ 
      status: err.statusCode, 
      message: err.message,
      stack: err.stack,
    })
  }
  res.status(500)
  res.json({
    name: err.name, 
    message: err.message,
    stack: err.stack,
  })
}
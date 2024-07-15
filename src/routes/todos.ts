import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Я тут')
})

export default router
import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send({ data: 'Hello, World!' })
})

export default router

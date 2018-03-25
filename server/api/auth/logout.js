import express from 'express'

const router = express.Router()

router.post('/', (req, res, next) => {
  req.logout()
  res.send({ message: 'Successfully logged out' })
})

export default router

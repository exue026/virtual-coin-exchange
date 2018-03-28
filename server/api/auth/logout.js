import express from 'express'

const router = express.Router()

router.post('/', (req, res, next) => {
  req.logout()
  req.session.destroy()
  res.clearCookie('connect.sid')
  res.send({ message: 'Successfully logged out' })
})

export default router

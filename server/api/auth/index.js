import express from 'express'

import login from './login'
import logout from './logout'
import register from './register'

const router = express.Router()

router.use('/login', login)
router.use('/logout', logout)
router.use('/register', register)

router.get('/', (req, res, next) => {
  /* session exists for the user */
  if (req.user) {
    res.status(200).send({ message: 'Logged in' })
  } else {
    res.status(401).send({ error: 'Not logged in' })
  }
})

export default router

import express from 'express'

import auth from './auth'
import users from './users'
import coins from './coins'

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/coins', coins)

export default router

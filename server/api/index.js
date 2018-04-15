import express from 'express'

import users from './users'
import auth from './auth'
import data from './data'
import coins from './coins'

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/data', data)
router.use('/coins', coins)

export default router

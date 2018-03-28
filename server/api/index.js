import express from 'express'

import users from './users'
import auth from './auth'

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)

export default router

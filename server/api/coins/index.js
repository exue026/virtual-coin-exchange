import express from 'express'

import coins from './coins'

const router = express.Router()

router.use('/', coins)

export default router

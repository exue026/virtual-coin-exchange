import express from 'express'
import mongoose from 'mongoose'

import User from '../models/user'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send({ data: 'Hello, World!' })
})

export default router

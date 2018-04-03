import express from 'express'
import mongoose from 'mongoose'

import {
  ensureAuthenticated,
  ensureObjectIdFormat,
} from '../middleware'

import User from '../models/user'

const router = express.Router()

router.get('/:userId', ensureAuthenticated, (req, res, next) => {

})

router.get('/:userId/games',
  ensureAuthenticated,
  ensureObjectIdFormat('userId'),
  async(req, res, next) => {
    try {
      const response = await User.findById(req.params.userId)
    } catch (error) {

    }
  res.send({ data: 'success!' })
})

export default router

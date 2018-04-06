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
      const user = await User.findById(req.params.userId)
      res.send({ data: user.games })
    } catch (error) {
      console.log(error)
      res.status(500).send({ error, })
    }
})

export default router

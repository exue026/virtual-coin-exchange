import express from 'express'
import mongoose from 'mongoose'

import {
  ensureAuthenticated,
  ensureObjectIdFormat,
} from '../middleware'

import User from '../models/user'

const router = express.Router()

router.get('/:userId', ensureAuthenticated, (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      res.send({ user, })
    })
    .catch(error => {
      res.send({ error, })
    })
})

router.get('/:userId/games',
  ensureAuthenticated,
  ensureObjectIdFormat('userId'),
  (req, res, next) => {
  res.send({ data: 'success!' })
})

export default router

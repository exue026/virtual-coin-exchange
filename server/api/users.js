import express from 'express'
import mongoose from 'mongoose'

import { ensureAuthenticated } from '../passport'

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

export default router

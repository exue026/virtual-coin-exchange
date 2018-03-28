import express from 'express'
import mongoose from 'mongoose'

import User from '../../models/user'

const router = express.Router()

router.post('/', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
  user.save()
    .then(error => {
      res.status(200).send({ data: error })
    })
})

export default router

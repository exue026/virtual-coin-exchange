import express from 'express'
import mongoose from 'mongoose'

import User from '../../models/user'

const router = express.Router()

router.post('/', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: 'theanswer',
    password: 'qwe123',
    email: 'allen.iverson@gmail.com',
  })
  user.save()
    .then(error => {
      res.status(200).send({ data: 'Hello, World!' })
    })
})

export default router

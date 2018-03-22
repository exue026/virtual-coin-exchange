import express from 'express'
import mongoose from 'mongoose'

import User from '../models/user'

const router = express.Router()

router.get('/', (req, res, next) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: 'test1',
  })
  newUser.save()
    .then(result => {
      User.findById(newUser._id)
      .exec()
      .then(doc => {
        console.log(doc)
        res.status(200).send({ data: 'hi!' })
      })
    })
})

export default router

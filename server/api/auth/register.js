import express from 'express'
import mongoose from 'mongoose'

import User from '../../models/user'

const router = express.Router()

const isRegistered = (email) => {
  return User.findOne({
    email: email,
  }).count()
    .then(results => {
      return results > 0
    })
}

router.post('/', (req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res.status(400).send({
      error: 'Missing credentials.'
    })
  }
  isRegistered(req.body.email)
    .then(isRegistered => {
      if (isRegistered) {
        return res.status(400).send({
          error: 'This user already exists.'
        })
      }
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        games: [],
      })
      user.save()
        .then(results => {
          return res.status(200).send({ data: results })
        })
        .catch(error => {
          return res.status(500).send({ error, })
        })
    })
})

export default router

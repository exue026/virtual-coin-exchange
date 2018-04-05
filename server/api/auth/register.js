import express from 'express'
import mongoose from 'mongoose'

import User from '../../models/user'

const router = express.Router()

const isRegistered = async(email) => {
  const results = await User.findOne({
    email: email,
  }).count()
  return results > 0
}

router.post('/', async(req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res.status(400).send({
      error: 'Missing credentials.'
    })
  }
  if (await isRegistered(req.body.email)) {
    return res.status(400).send({
      error: 'A user with this email already exists.'
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

export default router

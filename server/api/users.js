import express from 'express'
import mongoose from 'mongoose'

import {
  ensureAuthenticated,
  ensureObjectIdFormat,
} from '../middleware'

import User from '../models/user'

const router = express.Router()

router.get('/:userId', /*ensureAuthenticated,*/ (req, res, next) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    username: 'hi',
    email: 'ethan.xue@gmail.com',
    password: 'password',
    games: [
      {
        gameId: mongoose.Types.ObjectId(),
        budget: 500,
        coins: [
          {
            _id: 'Ethereum',
            quantity: 5,
            purchasedPrice: 10,
          }
        ]
      }
    ]
  })

  user.save().then(results => {
    res.send(results)
  })
})

router.get('/:userId/games',
  ensureAuthenticated,
  ensureObjectIdFormat('userId'),
  (req, res, next) => {

  res.send({ data: 'success!' })
})

export default router

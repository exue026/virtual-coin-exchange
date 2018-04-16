import express from 'express'
import mongoose from 'mongoose'

import {
  ensureAuthenticated,
  ensureObjectIdFormat,
} from '../middleware'

import Game from '../models/game'
import User from '../models/user'

const router = express.Router()

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

router.post('/:userId/games',
  ensureAuthenticated,
  ensureObjectIdFormat('userId'),
  async(req, res, next) => {
    const {
      gameName,
      startDate,
      endDate,
      createdBy,
      players,
      startingBudget,
    } = req.body
    try {
      const newGame = new Game({
        _id: mongoose.Types.ObjectId(),
        name: gameName,
        start: startDate,
        end: endDate,
        createdBy: createdBy,
        players: [mongoose.Types.ObjectId(req.params.userId)],
        startingBudget: startingBudget,
      })
      const results = await newGame.save()
      res.send({ data: results })
    } catch (err) {
      console.log(err)
      res.status(500).send({ err, })
    }
  })

export default router

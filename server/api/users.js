import express from 'express'
import mongoose from 'mongoose'

import {
  ensureAuthenticated,
  ensureObjectIdFormat,
} from '../middleware'

import Game from '../models/game'
import User from '../models/user'

const router = express.Router()

/* get all games of a user */
router.get('/:userId/games',
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

/* create a game */
router.post('/:userId/games',
  ensureObjectIdFormat('userId'),
  async(req, res, next) => {
    const {
      gameName,
      startDate,
      endDate,
      createdBy,
      playerIds,
      startingBudget,
    } = req.body
    let gameId = mongoose.Types.ObjectId()
    try {
      const newGame = new Game({
        _id: gameId,
        name: gameName,
        start: startDate,
        end: endDate,
        createdBy: createdBy,
        players: [mongoose.Types.ObjectId(req.params.userId)],
        startingBudget: startingBudget,
      })
      const results = await newGame.save()
    } catch (err) {
      console.log(err)
      res.status(500).send({ err, })
    }
    for (let playerId of playerIds) {
      await User.update({ _id: mongoose.Types.ObjectId(playerId) }, {
        $push: {
          games: {
            _id: gameId,
            budget: startingBudget,
            coins: [],
          }
        }
      })
    }
    res.send()
  })

/* user purchases a coin */
router.put('/:userId/games/:gameId/coins', ensureObjectIdFormat('userId'), async(req, res, next) => {
  const query = {
    "_id": mongoose.Types.ObjectId(req.params.userId),
    "games._id": mongoose.Types.ObjectId(req.params.gameId)
  }
  try {
    await User.update(query, {
      $push: {
        "games.0.coins": {
          _id: mongoose.Types.ObjectId(),
          coin_id: req.body.name,
          purchasedPrice: req.body.purchasedPrice,
          quantity: req.body.quantity,
        }
      }
    })
  } catch (err) {
    res.status(500).send({ err: err.error })
  }
  res.send()
})

/* user sells a coin */
router.post('/:userId/games/:gameId/coins', ensureObjectIdFormat('userId'), async(req, res, next) => {
  const {
    investmentId,
    price,
    quantity,
  } = req.body
  const query = {
    "_id": mongoose.Types.ObjectId(req.params.userId),
    "games._id": mongoose.Types.ObjectId(req.params.gameId),
    "games.coins._id": mongoose.Types.ObjectId(investmentId),
  }
  try {
    const docs = await User.find(query)
  } catch (err) {
    res.status(500).send({ err: err.error })
  }
  res.send()
})

export default router

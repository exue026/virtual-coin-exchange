import express from 'express'
import mongoose from 'mongoose'

import User from '../models/user'

const router = express.Router()

router.get('/', (req, res, next) => {
  User.find()
    .exec()
    .then(docs => {
      res.status(200).send({ data: 'Hello, World!' })
    })
    .catch(err => {
      res.status(500).send({ data: 'Server error' })
    })
})

export default router

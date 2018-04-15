import express from 'express'
import mongoose from 'mongoose'

import Coin from '../../models/coin'
import { populateHistory } from '../../data/populate-history'

const router = express.Router()

router.get('/', async(req, res, next) => {
  // await populateHistory()
  res.send('')
})

export default router

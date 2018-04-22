import express from 'express'
import mongoose from 'mongoose'

import Coin from '../../models/coin'
import { populateHistory } from '../../data/populate-history'
import { addWeeklyCoinData } from '../../jobs/coins'

const router = express.Router()

router.get('/', async(req, res, next) => {
  // await populateHistory()
  // await addWeeklyCoinData()
  res.send()
})

export default router

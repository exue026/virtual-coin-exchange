import express from 'express'
import mongoose from 'mongoose'

import Coin from '../../models/coin'
import { populateHistory } from '../../data/populate-history'
import { addWeeklyCoinData } from '../../jobs/coins'

const router = express.Router()

router.get('/', async(req, res, next) => {
  // await populateHistory()
  res.send()
})

router.get('/test', async(req, res, next) => {
  await addWeeklyCoinData()
  res.send()
})

export default router

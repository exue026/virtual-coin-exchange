import express from 'express'
import cheerio from 'cheerio'
import rp from 'request-promise'

import users from './users'
import auth from './auth'

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)

router.get('/test', async(req, res, next) => {

  //--------------------------
  const options = {
    uri: `https://coinmarketcap.com/historical/`,
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  const $  = await rp(options)
  console.log($('.list-unstyled').length);
  //--------------------------

  res.send('hi\n')
})

export default router

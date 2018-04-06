import express from 'express'
import passport from 'passport'

import User from '../../models/user'

const router = express.Router()

/*
if req.body.username or req.body.password is falsey, passport automatically returns
a 400 bad request response

if req.body.password does not match the password corresponding to the user with username
req.body.username, issure a 401 unauthorized response
*/
router.post('/', passport.authenticate('local'), async(req, res, next) => {
  const user = await User.findOne({
    username: req.body.username
  })
  res.send({
    message: 'Successfully logged in',
    userId: user.id
  })
})

export default router

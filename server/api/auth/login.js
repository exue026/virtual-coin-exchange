import express from 'express'
import passport from 'passport'

const router = express.Router()

/*
if req.body.username or req.body.password is falsey, passport automatically returns
a 400 bad request response

if req.body.password does not match the password corresponding to the user with username
req.body.username, issure a 401 unauthorized response
*/
router.post('/', passport.authenticate('local'), (req, res, next) => {
  res.send({ message: 'Successfully logged in' })
})

export default router

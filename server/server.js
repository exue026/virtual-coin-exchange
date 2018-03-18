import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'

import api from './api'

const app = express()
const port = process.env.PORT || 8000;

/* Only server static assets in production */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')))
}

/* debug messages in the console */
app.use(logger('dev'))

/* parse http request body */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* main route */
app.use('/api', api)

/* catch 404 */
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

/* error handler */
app.use((error, req, res, next) => {
  console.log(`*** ${error} ***`)
  res.locals.message = error.message
  res.locals.error = req.app.get('env') === 'development' ? error : {}
  res.status(error.status || 500)
  res.send(`<html><h1>${error.message}</h1></html>`)
})

app.listen(port, () => console.log(`Server listening on port ${port}`));

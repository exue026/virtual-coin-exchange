import mongoose from 'mongoose'

export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next() }
  return res.status(401).send()
}

export const ensureObjectIdFormat = (key) => {
  return (req, res, next) => {
    if (!(key in req.params)) {
      return res.status(500).send({
        error: 'Specified id type does not match given id type.',
      })
    }
    const id = req.params[key]
    const objectId = mongoose.Types.ObjectId
    if (!objectId.isValid(id) || !(objectId(id).toString() === id)) {
      return res.status(400).send({
        error: 'Invalid id.'
      })
    }
    return next()
  }
}

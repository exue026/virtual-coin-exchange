import mongoose from 'mongoose'

const gameSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  start: Date,
  end: Date,
})

export default mongoose.model('Game', userSchema)

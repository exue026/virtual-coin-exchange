import mongoose from 'mongoose'

const gameSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  start: Date,
  end: Date,
  createdBy: String,
  players: [mongoose.Schema.Types.ObjectId],
  startingBudget: Number,
})

export default mongoose.model('Game', gameSchema)

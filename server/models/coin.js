import mongoose from 'mongoose'

const coinSchema = mongoose.Schema({
  _id: String,
  symbol: String,
  data: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      marketCap: Number,
      price: Number,
      supply: Number,
      date: Date,
    }
  ]
})

export default mongoose.model('Coin', coinSchema)

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
      sevenDayChange: Number,
      date: Date,
    }
  ]
})

coinSchema.statics.getAllIds = function() {
  return this.find({}, '_id price')
    .then(docs => {
      return docs.map(doc => {
        return {
          id: doc._id,
        }
      })
    })
}

export default mongoose.model('Coin', coinSchema)

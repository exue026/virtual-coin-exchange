import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  email: String,
  password: String,
  games: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      budget: Number,
      numTransactions: {
        type: Number,
        default: 0,
      },
      coins: [
        {
          _id: mongoose.Schema.Types.ObjectId, // userCoinsId
          coin_id: String,
          quantity: Number,
          purchasedPrice: Number,
          purchasedTime: Date,
        }
      ]
    }
  ]
})

userSchema.methods = {
  verifyPassword(password) {
    return password === this.password
  }
}

export default mongoose.model('User', userSchema)

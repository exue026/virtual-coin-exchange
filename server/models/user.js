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
      netWorth: Number,
      coins: [
        {
          _id: String,
          quantity: Number,
          purchasedPrice: Number,
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

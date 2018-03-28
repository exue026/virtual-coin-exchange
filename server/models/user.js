import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  email: String,
})

userSchema.methods = {
  verifyPassword(password) {
    return password === this.password
  }
}

export default mongoose.model('User', userSchema)

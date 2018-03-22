import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
})

export default mongoose.model('User', userSchema)

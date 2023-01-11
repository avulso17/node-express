import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String },
  },
  {
    versionKey: false,
  }
)

const Authors = mongoose.model('authors', authorSchema)

export default Authors

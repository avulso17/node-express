import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String },
  },
  {
    // This will remove the __v field from the document
    versionKey: false,
  }
)

const Authors = mongoose.model('authors', authorSchema)

export default Authors

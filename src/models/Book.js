import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  editor: { type: String, required: true },
  numberPages: { type: Number },
})

const Books = mongoose.model('books', bookSchema)

export default Books
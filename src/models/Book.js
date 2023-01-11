import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors',
    required: true,
  },
  editor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'editors',
    required: true,
  },
  numberPages: { type: Number },
})

const Books = mongoose.model('books', bookSchema)

export default Books

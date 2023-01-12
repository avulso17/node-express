import Books from '../models/Book.js'

// This is the controller for the books routes
export default {
  getBooks(_req, res) {
    Books.find()
      // This is the magic line that will populate the author field
      .populate('author')
      .populate('editor')
      .exec((_err, books) => {
        return res.status(200).json(books)
      })
  },

  async getBookById(req, res) {
    try {
      const { id } = req.params

      const book = await Books.findById(id)
        .populate('author')
        .populate('editor')

      if (!book) {
        return res.status(404).send({ message: 'Book not found' })
      }

      return res.status(200).json(book)
    } catch (err) {
      return res
        .status(500)
        .send({ message: `Error getting book - ${err.message}` })
    }
  },

  getBookByTitle(req, res) {
    const title = req.query.title

    Books.find({ title }, {}, (err, books) => {
      if (err) {
        return res.status(400).send({
          message: `Error getting ${title} book - ${err.message}`,
        })
      } else {
        return res.status(200).json(books)
      }
    })
  },

  addBook(req, res) {
    const book = new Books(req.body)

    book.save((err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error adding book - ${err.message}` })
      } else {
        return res.status(201).send('Book added successfully')
      }
    })
  },

  updateBook(req, res) {
    const { id } = req.params

    Books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error updating book - ${err.message}` })
      } else {
        return res.status(200).send({ message: 'Book updated successfully!' })
      }
    })
  },

  deleteBook(req, res) {
    const { id } = req.params

    Books.findByIdAndDelete(id, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error deleting book - ${err.message}` })
      } else {
        return res.status(203).send({ message: 'Book deleted successfully!' })
      }
    })
  },
}

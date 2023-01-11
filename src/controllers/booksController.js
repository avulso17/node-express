import Books from '../models/Book.js'

// This is the controller for the books routes
class BookController {
  static getBooks(_req, res) {
    Books.find((_err, books) => {
      return res.status(200).json(books)
    })
  }

  static getBookById(req, res) {
    const { id } = req.params

    Books.findById(id, (err, book) => {
      if (err) {
        return res
          .status(400)
          .send({ message: `Error getting book - ${err.message}` })
      } else {
        return res.status(200).json(book)
      }
    })
  }

  static addBook(req, res) {
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
  }

  static updateBook(req, res) {
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
  }

  static deleteBook(req, res) {
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
  }
}

export default BookController
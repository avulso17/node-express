import Books from '../models/Book.js'

// function for finding a book by id
function findBook(id) {
  return Books.findIndex((item) => item.id === parseInt(id))
}

// This is the controller for the books routes
class BookController {
  static getBooks(_req, res) {
    Books.find((_err, books) => {
      return res.status(200).json(books)
    })
  }

  static getBookById(req, res) {
    const index = findBook(req.params.id)
    res.json(Books[index])
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
}

export default BookController

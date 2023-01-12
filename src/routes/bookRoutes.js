import express from 'express'
import Controller from '../controllers/booksController.js'
import objectIdValidator from '../middlewares/objectIdValidator.js'

const router = express.Router()

router
  .get('/books', Controller.getBooks)
  .get('/books/search', Controller.getBookByTitle)
  .get('/books/:id', objectIdValidator, Controller.getBookById)
  .post('/books', Controller.addBook)
  .put('/books/:id', objectIdValidator, Controller.updateBook)
  .delete('/books/:id', objectIdValidator, Controller.deleteBook)

export default router

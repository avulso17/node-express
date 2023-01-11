import express from 'express'
import Controller from '../controllers/booksController.js'

const router = express.Router()

router
  .get('/books', Controller.getBooks)
  .get('/books/search', Controller.getBookByEditor)
  .get('/books/:id', Controller.getBookById)
  .post('/books', Controller.addBook)
  .put('/books/:id', Controller.updateBook)
  .delete('/books/:id', Controller.deleteBook)

export default router

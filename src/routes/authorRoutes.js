import express from 'express'
import AuthorController from '../controllers/authorController.js'

const router = express.Router()

router
  .get('/author', AuthorController.getAuthors)
  .get('/author/:id', AuthorController.getAuthorById)
  .post('/author', AuthorController.addAuthor)
  .put('/author/:id', AuthorController.updateAuthor)
  .delete('/author/:id', AuthorController.deleteAuthor)

export default router

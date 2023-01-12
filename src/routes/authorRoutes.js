import express from 'express'
import Controller from '../controllers/authorController.js'
import objectIdValidator from '../middlewares/objectIdValidator.js'

const router = express.Router()

router
  .get('/author', Controller.getAuthors)
  .get('/author/:id', objectIdValidator, Controller.getAuthorById)
  .post('/author', Controller.addAuthor)
  .put('/author/:id', objectIdValidator, Controller.updateAuthor)
  .delete('/author/:id', objectIdValidator, Controller.deleteAuthor)

export default router

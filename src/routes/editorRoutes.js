import express from 'express'
import Controller from '../controllers/editorController.js'
import objectIdValidator from '../middlewares/objectIdValidator.js'

const router = express.Router()

router
  .get('/editor', Controller.getEditors)
  .get('/editor/:id', objectIdValidator, Controller.getEditorById)
  .post('/editor', Controller.addEditor)
  .put('/editor/:id', objectIdValidator, Controller.updateEditor)
  .delete('/editor/:id', objectIdValidator, Controller.deleteEditor)

export default router

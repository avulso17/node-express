import express from 'express'
import Controller from '../controllers/editorController.js'

const router = express.Router()

router
  .get('/editor', Controller.getEditors)
  .get('/editor/:id', Controller.getEditorById)
  .post('/editor', Controller.addEditor)
  .put('/editor/:id', Controller.updateEditor)
  .delete('/editor/:id', Controller.deleteEditor)

export default router

import Editor from '../models/Editor.js'

// This is the controller for the editors routes
export default {
  getEditors(_req, res) {
    Editor.find((_err, editor) => {
      return res.status(200).json(editor)
    })
  },

  getEditorById(req, res) {
    const { id } = req.params

    Editor.findById(id, (err, editor) => {
      if (err) {
        return res
          .status(400)
          .send({ message: `Error getting editor - ${err.message}` })
      } else {
        return res.status(200).json(editor)
      }
    })
  },

  addEditor(req, res) {
    const editor = new Editor(req.body)

    editor.save((err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error adding editor - ${err.message}` })
      } else {
        return res.status(201).send('Editor added successfully')
      }
    })
  },

  updateEditor(req, res) {
    const { id } = req.params

    Editor.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error updating editor - ${err.message}` })
      } else {
        return res.status(200).send({ message: 'Editor updated successfully!' })
      }
    })
  },

  deleteEditor(req, res) {
    const { id } = req.params

    Editor.findByIdAndDelete(id, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error deleting editor - ${err.message}` })
      } else {
        return res.status(203).send({ message: 'Editor deleted successfully!' })
      }
    })
  },
}

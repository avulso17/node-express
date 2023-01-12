import Authors from '../models/Author.js'

// This is the controller for the authors routes
export default {
  getAuthors(_req, res) {
    Authors.find((_err, author) => {
      return res.status(200).json(author)
    })
  },

  async getAuthorById(req, res) {
    try {
      const { id } = req.params

      const author = await Authors.findById(id)

      if (!author) {
        return res.status(404).send({ message: 'Author not found' })
      }

      return res.status(200).json(author)
    } catch (err) {
      return res
        .status(500)
        .send({ message: `Error getting author - ${err.message}` })
    }
  },

  addAuthor(req, res) {
    const author = new Authors(req.body)

    author.save((err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error adding author - ${err.message}` })
      } else {
        return res.status(201).send('Author added successfully')
      }
    })
  },

  updateAuthor(req, res) {
    const { id } = req.params

    Authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error updating author - ${err.message}` })
      } else {
        return res.status(200).send({ message: 'Author updated successfully!' })
      }
    })
  },

  deleteAuthor(req, res) {
    const { id } = req.params

    Authors.findByIdAndDelete(id, (err) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error deleting author - ${err.message}` })
      } else {
        return res.status(203).send({ message: 'Author deleted successfully!' })
      }
    })
  },
}

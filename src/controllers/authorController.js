import Authors from '../models/Author.js'

// This is the controller for the authors routes
class AuthorController {
  static getAuthors(_req, res) {
    Authors.find((_err, author) => {
      return res.status(200).json(author)
    })
  }

  static getAuthorById(req, res) {
    const { id } = req.params

    Authors.findById(id, (err, author) => {
      if (err) {
        return res
          .status(400)
          .send({ message: `Error getting author - ${err.message}` })
      } else {
        return res.status(200).json(author)
      }
    })
  }

  static addAuthor(req, res) {
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
  }

  static updateAuthor(req, res) {
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
  }

  static deleteAuthor(req, res) {
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
  }
}

export default AuthorController

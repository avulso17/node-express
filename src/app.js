import express from 'express'
import database from './config/databaseConnect.js'
import Books from './models/Book.js'
import routes from './routes/index.js'

// Connect to database
database.on('error', console.log.bind(console, 'connection error:'))

// Once the connection is open, log a message
database.once('open', () => {
  console.log('database connected!')
})

const app = express()

app.use(express.json())

routes(app)

// TODO: move this to a controller
app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id)
  Books[index].title = req.body.title
  res.json(Books)
})

// TODO: move this to a controller
app.delete('/books/:id', (req, res) => {
  const { id } = req.params
  const index = findBook(id)
  Books.splice(index, 1)
  res.send(`Book ${id} deleted successfully`)
})

function findBook(id) {
  return Books.findIndex((item) => item.id === parseInt(id))
}

export default app

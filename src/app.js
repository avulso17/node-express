import express from 'express'
import database from './config/databaseConnect.js'
import Books from './models/Book.js'

database.on('error', console.log.bind(console, 'connection error:'))

database.once('open', () => {
  console.log('database connected!')
})

const app = express()

app.use(express.json())

// const books = [
//   {
//     id: 1,
//     title: 'The Hobbit',
//   },
//   {
//     id: 2,
//     title: 'The Lord of the Rings',
//   },
// ]

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my library API!')
})

app.get('/books', (req, res) => {
  Books.find((_err, books) => {
    return res.status(200).json(books)
  })
})

app.get('/books/:id', (req, res) => {
  const index = findBook(req.params.id)
  res.json(Books[index])
})

app.post('/books', (req, res) => {
  Books.push(req.body)
  res.status(201).send('Book added successfully')
})

app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id)
  Books[index].title = req.body.title
  res.json(Books)
})

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

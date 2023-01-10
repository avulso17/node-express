import express from 'express'

const app = express()

app.use(express.json())

const books = [
  {
    id: 1,
    title: 'The Hobbit',
  },
  {
    id: 2,
    title: 'The Lord of the Rings',
  },
]

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my library API!')
})

app.get('/books', (req, res) => {
  res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
  const index = findBook(req.params.id)
  res.json(books[index])
})

app.post('/books', (req, res) => {
  books.push(req.body)
  res.status(201).send('Book added successfully')
})

app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id)
  books[index].title = req.body.title
  res.json(books)
})

app.delete('/books/:id', (req, res) => {
  const { id } = req.params
  const index = findBook(id)
  books.splice(index, 1)
  res.send(`Book ${id} deleted successfully`)
})

function findBook(id) {
  return books.findIndex((item) => item.id === parseInt(id))
}

export default app

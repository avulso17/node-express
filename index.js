import app from './src/app.js'

const port = process.env.PORT || 4004

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`)
})

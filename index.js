import express from 'express'
import app from './src/app.js'
import routes from './src/routes/index.js'

const port = process.env.PORT || 4004

app.use(express.json({ extended: false }))

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`)
})

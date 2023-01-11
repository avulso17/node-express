import express from 'express'
import booksRoutes from './bookRoutes.js'
import authorRoutes from './authorRoutes.js'

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send('Welcome to my library API!')
  })

  app.use(express.json(), booksRoutes, authorRoutes)
}

export default routes

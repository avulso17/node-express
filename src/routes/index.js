import express from 'express'
import books from './bookRoutes.js'

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send('Welcome to my library API!')
  })

  app.use(express.json(), books)
}

export default routes

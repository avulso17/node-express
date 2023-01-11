import express from 'express'
import database from './config/databaseConnect.js'
import routes from './routes/index.js'

// Connect to database
database.on('error', console.log.bind(console, 'connection error:'))

// Once the connection is open, log a message
database.once('open', () => {
  console.log('database connected!')
})

// Create the express app instance
const app = express()

// json middleware to parse the request body
app.use(express.json())

// Add the routes to the app
routes(app)

export default app

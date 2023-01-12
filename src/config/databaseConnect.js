import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
  `mongodb+srv://poseidon:${process.env.DATABASE_PWD}@node-express.s33wyzr.mongodb.net/${process.env.DATABASE_NAME}`
)

const database = mongoose.connection

export default database

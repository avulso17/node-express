import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://poseidon:0jkuEv8Lshem3nGA@node-express.s33wyzr.mongodb.net/poseidon-database'
)

const database = mongoose.connection

export default database

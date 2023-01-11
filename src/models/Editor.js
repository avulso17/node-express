import mongoose from 'mongoose'

const EditorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    // This will remove the __v field from the document
    versionKey: false,
  }
)

const Editor = mongoose.model('editors', EditorSchema)

export default Editor

import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    name: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Posts = mongoose.model('Posts', postSchema)
export default Posts

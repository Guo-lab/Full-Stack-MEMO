import mongoose from "mongoose";


// mongoose allows us to give some sort of uniformity to our documents
const postSchema = mongoose.Schema({
    
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
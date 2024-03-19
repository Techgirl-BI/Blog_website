// Import mongoose with a timestamp
import mongoose from "mongoose";

const now = new Date();

const postSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: now
  }
},
{ timestamps: true }); 

const Post = mongoose.model('Post', postSchema); 
export default Post

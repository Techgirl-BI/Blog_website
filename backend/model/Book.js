import mongoose from "mongoose";

const now = new Date();

const bookSchema = new mongoose.Schema({
Language: {
    type: String
},
title: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: now
  }
},
{ timestamps: true }); 

const Book = mongoose.model('Book', bookSchema); 
export default Book

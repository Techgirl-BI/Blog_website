import express from 'express'
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/post.js'

 export const postRouter = express.Router()

 postRouter.post('/new', createPost)
 postRouter.get('/', getAllPosts)
 postRouter.get('/:id', getPost) 
 postRouter.patch('/update/:id', updatePost)
 postRouter.delete('/delete/:id', deletePost)
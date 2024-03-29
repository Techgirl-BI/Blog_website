import express from 'express'
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from '../controllers/book.js'

export const bookRouter = express.Router()

bookRouter.post('/new', createBook)
bookRouter.get('/', getBook)
bookRouter.patch('/edit:id', updateBook)
bookRouter.get('/', getAllBooks )
bookRouter.delete('/', deleteBook)
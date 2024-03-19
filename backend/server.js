import express from 'express'
import httpStatus from 'http-status'
import cors from 'cors'
import { dbConnect } from './config/dbConnect.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { postRouter } from './routes/postRoutes.js'
dotenv.config({})
const app = express()
 
app.use(cors())
app.use(express.json())
app.use(morgan())
app.use("/blogs", postRouter)
app.get('/', (req, res) => {
  res.status(httpStatus.OK).send('Welcome to my blog website')
})

const {PORT, NODE_ENV} = process.env
const port = NODE_ENV === 'development' ? 3000 : PORT
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
})
        dbConnect().then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));

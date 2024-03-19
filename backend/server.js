import express from 'express'
import httpStatus from 'http-status'

const app = express()

app.get('/', (req, res) => {
  res.status(httpStatus.OK).send('Welcome to my blog website')
})

app.listen(3000, () => {
  console.log('App is listening on port 3000!')
})
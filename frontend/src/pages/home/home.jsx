import React from 'react'
import Navbar from '../../components/Navbar'
import { Images } from './Images'
import Heading from './Heading'
import BlogCard from '../../components/BlogCard'
import Socialmedia from './Socialmedia'
import Feedback from '../../components/Feedback'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Images/>
    <Heading/>
    <div className='flex space-x-60 p-14 '>
    <BlogCard/>
    <Socialmedia/>
    </div>
    <Feedback/>
    </>
  )
}

export default Home
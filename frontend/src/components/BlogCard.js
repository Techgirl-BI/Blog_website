import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router';

const base_url = "http://localhost:3010/"
const BlogCard = () => {
  const navigate = useNavigate()
const [blog, setBlog] = useState([])

useEffect(() => {
    getPosts()
}, [])

const getPosts = async () => {
    try {
      const response = await axios.get(`${base_url}blogs`);
      console.log(response.data);
      setBlog(response.data)
    } catch (error) {
      console.error(error);
    }
  };
console.log(blog)
const newBlogArray = blog.slice(0,3)

const handleClick = () => {
    navigate('/blogs')
}

  return (
    <div className='w-fit ml-60 '>
      {newBlogArray.map(blog => <div key={blog.id}>
        <Card className="max-w-sm mt-4" imgSrc="https://static.wixstatic.com/media/7ae45f_bad6c52227964b1aa3dc681ccf89fbd3~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/7ae45f_bad6c52227964b1aa3dc681ccf89fbd3~mv2.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {blog.content}
      </p>
    </Card>
      </div>)}
      <button onClick = {handleClick} className='mt-10 py-4 px-10 mb-20 hover:bg-black bg-pink-800 text-white ml-10 text-xl'>All Posts</button>
    </div>
  )
}

export default BlogCard
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Feedback from '../../components/Feedback';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router';
const base_url = "https://blog-website-c6eb.onrender.com";

const Feed = () => {
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://blog-website-c6eb.onrender.com/blogs");
            console.log(response.data);
            setBlog(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = () => {
        navigate('/blogs')
    }
    return (
        <div>
            <Navbar />
            <p className='w-fit mx-auto text-5xl font-bold mb-30 mt-10 '>The Feed</p>
            <div className='flex justify-between'>
                <p onClick={handleClick} className='ml-10'>All Posts</p>
                <button className='border border-pink-600 mr-20 py-3 text-pink-600 px-9'>Login/Sign Up</button></div>
            <div className="flex flex-wrap justify-evenly">
                {blog.map(blog => (
                    <div key={blog.id} className="max-w-xs mx-2 mt-7 mb-4 bg-white rounded-xl overflow-hidden shadow-md">
                        <img src="https://static.wixstatic.com/media/7ae45f_6b66dbafbd3e402089afac926853faf1~mv2.jpg/v1/fill/w_272,h_363,fp_0.50_0.50,q_90,enc_auto/7ae45f_6b66dbafbd3e402089afac926853faf1~mv2.jpg" alt="Blog Thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{blog.title}</div>
                            <p className="text-gray-700 text-base">{blog.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Feed;

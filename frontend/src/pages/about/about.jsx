import React from 'react'
import Navbar from '../../components/Navbar'
import Feedback from '../../components/Feedback'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex bg-pink-100 w-3/4 mx-auto m-20 space-x-28 py-20 px-32 '>
            <div className='w-1/3 '>
            <h1 className='font-serif text-3xl pb-6'>Meet the face
behind the posts</h1>
<p className='leading-7 font-serif'>Janine Udogu was born and raised in Zürich, Switzerland. She has been interested in foreign languages and cultures since childhood. Growing up with a Moroccan stepfather not only made her fall in love with spicy food but also made her be open-minded when it comes to other cultures, languages, and traditions. 
​

Janine Udogu married her dear husband and the father of her children in 2012 and has ever since been putting strong efforts into learning the Igbo language and culture. She and her husband Ezenwa are raising the kids in both worlds and try to bring them "home" as often as possible. 

 

Her blog and books as well as her artworks and posts on social media are all about the beauty of cultural diversity and family life balancing both Swiss and Igbo heritage and traditions. </p>
            </div>
            <div>
<img src='https://static.wixstatic.com/media/7ae45f_a82b50318567490ab8f33082d742da84~mv2.jpg/v1/crop/x_0,y_44,w_1440,h_1069/fill/w_490,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/260605637_448906993269970_500316190354441650_n.jpg'/>
            </div>
        </div>
        <Feedback/>
    </div>
  )
}

export default About
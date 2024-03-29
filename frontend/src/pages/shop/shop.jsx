import React from 'react'
import image from '../../assets/90042 pics.jpg'
import Feedback from '../../components/Feedback'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Carousel } from "flowbite-react";

const kidsWears = [
    {
        id:1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
    {
        id:2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$20"
    },
    {
        id:3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
    {
        id:4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
]
const womenWears = [
    {
        id:1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
    {
        id:2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$20"
    },
    {
        id:3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
    {
        id:4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    }
]
const menWears = [
    {
        id:1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
    {
        id:2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$20"
    },
    {
        id:3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    },
    {
        id:4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:"$10"
    }
]
const Shop = () => {
    const kids = kidsWears.map(wear => {
        return <div key={wear.id} className=''>
            <img src={image}/>
            <p className='mt-5'>{wear.description}</p>
            <p>{wear.price}</p>
        </div>
    })
    const women = womenWears.map((wear) =>{
        return <div key={wear.id}>
        <img src={image} alt='...'/>
        <p>{wear.description}</p>
        <p>{wear.price}</p>
    </div>
    })
    const men = menWears.map((wear) =>{
        return <div key={wear.id}>
        <img src={image} className=''/>
        <p>{wear.description}</p>
        <p>{wear.price}</p>
    </div>
    })
  return (
    <div>
        <Navbar/>
<div>
<p className='font-semi-bold text-4xl ml-48 py-10 '>Kids</p>
<div className='flex ml-48 space-x-20'>
{kids}
</div>
<p className='font-semi-bold text-4xl ml-48 py-10'>Women</p>
<div className='flex ml-48 space-x-20'>
{women}
</div>
<p className='font-semi-bold text-4xl ml-48 py-10'>Men</p>
<div className='flex ml-48 space-x-20'>
{men}
</div>
</div>
<Feedback/>
<Footer/>
    </div>
  )
}

export default Shop
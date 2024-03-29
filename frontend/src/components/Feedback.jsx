import React from 'react'

const Feedback = () => {
  return (
    <div className='bg-pink-100 '>
        <p className='text-3xl mx-auto w-fit pt-24 pb-24 font-semibold'>Let me know what's on your mind</p>
        <form className='w-fit mx-auto '>
           <div className='flex space-x-20'>
           <div>
           <label>
                First Name
            </label>  <br/>
            <input type='text' className='bg-transparent w-80  mb-8 border-t-0 border-r-0 border-b-2 border-b-black border-l-0' /> <br/>
            <label > 
                Email
            </label>  <br/>
            <input type='text' className='w-80 bg-transparent border-t-0 border-r-0 border-b-2 border-b-black border-l-0'/>  <br/>
           </div>
           <div>
           <label>Last Name</label> <br/>
            <input type='text'className='w-80 mb-8 bg-transparent border-t-0 border-r-0 border-b-2 border-b-black border-l-0'/> <br/>
            
            <label>
            Leave a message
            </label> <br/>
            <input type='text' className=' w-80 bg-transparent border-t-0 border-r-0 border-b-2 border-b-black border-l-0'/>  <br/>
           </div>
           </div>
            <button type='submit' className='ml-80 mt-10 mb-20 bg-yellow-900 text-white py-2 px-4 text-xl'>Submit</button> <br/>
        </form>
    </div>
  )
}

export default Feedback
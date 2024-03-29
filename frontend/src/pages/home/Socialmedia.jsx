import React from 'react'

const Socialmedia = () => {
  return (
    <div className='bg-pink-200 px-20'>
        <p className='text-4xl border m-11 font-semibold w-fit'>Find me on Social Media</p>
       <div className='flex space-x-10 mb-6 w-fit mx-auto'>
       <img src='https://static.wixstatic.com/media/44eb1e29ffa34198aee01e8d4f305903.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/44eb1e29ffa34198aee01e8d4f305903.png'/>
        <img src="https://static.wixstatic.com/media/59687ffffc2042f885062ce2b0744381.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59687ffffc2042f885062ce2b0744381.png"/>
        <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png"/>
        <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9f9c321c774844b793180620472aa4f1.png"/>
        <img src="https://static.wixstatic.com/media/63f140fc5a154a20af32ac5e5c5f734e.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/63f140fc5a154a20af32ac5e5c5f734e.png"/>
       </div>
        <div>
            <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/120396973_201931277967544_397368717721951211_n.jpg?stp=dst-jpg_p130x130&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHeK5Ro1bm9hAvsAWpI2OrzEgCC0yDrAPkSAILTIOsA-fyeuLMzhPwUBLAMPcr-SrksLLDLZrCMQ16p_9PpZZfO&_nc_ohc=R1ovsbKUDmIAX-NqD7K&_nc_ht=scontent.flos1-2.fna&oh=00_AfAhVBL0G4Lfy6l04tKNrV2sVBRlYLl_cqDdpQDo7CF42g&oe=66297298"/>
        </div>
        <div className='bg-pink-800 w-80 pl-6 pr-6'>
            <h1 className='text-4xl text-white text-center pt-10 mt-6 mb-4'>Let the Posts come to you</h1>
            <form>
                <label className='text-white font-medium'>Email</label> 
                <input type="text" className ="bg-transparent w-72 block  h-7 border-t-0 border-l-0 border-r-0  border-b-white border-b-2" /> <br></br>
                <button className='bg-white mt-5 py-3 px-6 text-xl ml-16 mb-10'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Socialmedia
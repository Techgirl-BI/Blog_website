import React from 'react'
import image from '../../assets/90042 pics.jpg'
const books = [
   {
    id: 1,
    language:"English",
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga nemo magni porro numquam, ducimus aut, iste unde, consectetur temporibus harum nulla impedit ipsa. Beatae voluptatem laboriosam obcaecati nostrum incidunt?",
    image: "https://static.wixstatic.com/media/7ae45f_e8eab33e01dd4ca7a05b12fa538a47d8~mv2.png/v1/crop/x_493,y_777,w_1513,h_1597/fill/w_380,h_401,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/h.png"
   },
   {
    id: 2,
    language:"Igbo",
    title: "Lorem ipsum dolor dicta sunt!",
    image: "https://static.wixstatic.com/media/7ae45f_e8eab33e01dd4ca7a05b12fa538a47d8~mv2.png/v1/crop/x_493,y_777,w_1513,h_1597/fill/w_380,h_401,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/h.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque laboriosam laborum iste, nulla deserunt dolor hic saepe illum provident in animi repellat adipisci, ipsam possimus veritatis, dicta sunt!",
   },
   {
    id: 3,
    language:"German",
    title: "Lorem ipsum dolor sit!",
    image: "https://static.wixstatic.com/media/7ae45f_e8eab33e01dd4ca7a05b12fa538a47d8~mv2.png/v1/crop/x_493,y_777,w_1513,h_1597/fill/w_380,h_401,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/h.png",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque laboriosam laborum iste, nulla deserunt dolor hic saepe illum provident in animi repellat adipisci, ipsam possimus veritatis, dicta sunt!",
   },
   {
    id: 4,
    language:"Francais",
    image: "https://static.wixstatic.com/media/7ae45f_e8eab33e01dd4ca7a05b12fa538a47d8~mv2.png/v1/crop/x_493,y_777,w_1513,h_1597/fill/w_380,h_401,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/h.png",
    title: "Lorem ipsum dolor  sunt!",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque laboriosam laborum iste, nulla deserunt dolor hic saepe illum provident in animi repellat adipisci, ipsam possimus veritatis, dicta sunt!",
   }

]
const BookCollections = () => {
    const booksCatalogue = books.map(book => {
    return <div key={book.id} className='bg-white p-8 mb-8'>
        <p className=' font-serif text-3xl'>{book.language}</p>
        <p className='font-serif mb-7 text-lg pb-4 border-b-2 border-b-zinc-500'>{book.title}</p>
        <img src={image}/>
        <p className='font-serif text-sm'>{book.description}</p>
    </div>
    })
  return (
    <div className='mt-48 bg-zinc-400 flex space-x-10'>
       {booksCatalogue}
    </div>
  )
}

export default BookCollections
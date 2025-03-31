 import React from 'react'
 import Message from './Message'
 import Img from "../assests/kursdoshlar.png"
 import Gost from "../assests/Gost.jpg"
 import Kodlar from "../assests/IMG_20250318_013706.jpg"
  const Books = () => {
    return (
      <div>
       <h1>{` 31.03.2025 `}</h1>
         <img className='bg-no-repeat bg-cover bg-center' src={Img} alt="kursdoshlar" />
         <img className='bg-no-repeat bg-cover bg-center' src={Gost} alt="kursdoshlar" />
       <img className='bg-no-repeat bg-cover bg-center' src={Kodlar} alt="kursdoshlar" />
         <Message/>
        </div>
       )
     }
    
     export default Books

  
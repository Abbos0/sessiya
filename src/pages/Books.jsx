  
//  import React from 'react'
//  import Message from './Message'
//   const Books = () => {
//     return (
//       <div>
//           <pre>
//               <p class="text ">
                 
//                 <h1>{`
//                           Gost ham tugadi

//                   `}</h1>
//                 </p>
//             </pre>   

//           <Message/>
          
//         </div>
//        )
//      }
    
//      export default Books



 import React from 'react'
 import Message from './Message'
 import Img from "../assests/kursdoshlar.png"
 import Gost from "../assests/Gost.jpg"
  const Books = () => {
    return (
      <div>
         <img className='bg-no-repeat bg-cover bg-center' src={Img} alt="kursdoshlar" />
         <img className='bg-no-repeat bg-cover bg-center' src={Gost} alt="kursdoshlar" />
         <Message/>
        </div>
       )
     }
    
     export default Books

  

import React, { useState } from 'react';
const Password = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '2002') {
      onLogin(); 
    } else {
      setPassword('');
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[skyblue]">
      <form className="bg-[blue] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input  className="shadow bg-[#e3eaed] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center "  type="password '2002'"  id="pswd"  placeholder="Password "  value={password}  onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="flex items-center justify-center">
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Log in  </button>
        </div>
    <a  href="https://exam-seven-theta.vercel.app/"target='blank' type="button" class="bg-[red] border  p-[3px] "></a>
      </form>
    </div>

  //  <div className="flex justify-center items-center h-screen ">
  //     <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
  //       <div className="mb-4">
  //         <input  className="shadow bg-[#f7f3f3] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center "  type="password"  id="pswd"  placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)} required />
  //       </div>
  //       <div className="flex items-center justify-center">
  //         <button  className="bg-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Log in  </button>
  //       </div>
  //     </form>
  //     <a  href="https://exam-seven-theta.vercel.app/"target='blank' type="button" class="bg-[#42ba9a] border   rounded px-1 pt-1 pb-2"></a>
  //   </div>
   
  );
};

export default Password;

import React from 'react';
import sucessImg from '../assest/success.gif'
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='bg-white w-full max-w-md mx-auto flex items-center justify-center flex-col p-4 m-28 rounded'>
      <img src={sucessImg}
      width={300}
      height={300}
      
      />

      <p className='text-green-600 font-bold text-xl'>Payment Successfull</p>

      <Link to="/order" className='p-2 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>Order Details</Link>
    </div>
  )
}

export default Success

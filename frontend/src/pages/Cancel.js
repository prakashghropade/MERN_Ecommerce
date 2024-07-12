import React from 'react';
import cancleImg from '../assest/cancle.png'
import { Link } from 'react-router-dom';

const Cancle = () => {
  return (
    <div className='bg-white w-full max-w-md mx-auto flex items-center justify-center flex-col p-4 m-16 rounded'>
      <img src={cancleImg}
      width={300}
      height={300}
      
      />

      <p className='text-red-600 font-bold text-xl'>Payment Cancel</p>

      <Link to="/cart" className='p-2 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'>Go to Cart</Link>
    </div>
  )
}

export default Cancle

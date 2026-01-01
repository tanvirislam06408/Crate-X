import React from 'react';
import imgOne from '../assets/austin-distel-744oGeqpxPQ-unsplash.jpg'

const SliderOne = () => {
    return (
        <div className='flex justify-between content-center items-center p-2'>
           <div>
             <h1 className='font-semibold text-2xl '>Get handpicked products delivered to your doorstep every month</h1>
             <button className='btn btn-secondary mt-2.5'>Buy Now</button>
           </div>
        <img className='max-w-2xl rounded-2xl' src={imgOne} alt="" />
        </div>
    );
};

export default SliderOne;
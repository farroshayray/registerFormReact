import React, { useState } from 'react'
import Login from '../Login';
import App from '../App';

export const FinishRegister = () => {
  return (
    <div className='flex flex-col justify-center max-w-fit mx-auto '>
        <div className='bg-white rounded-md h-56 flex flex-col justify-center shadow-md'>
            <h1 className='text-center mx-3'>Thank You !</h1>
            <p className='text-center mx-10'>You have finished your registration</p>
            <small className='text-center mx-10'>Please Re-Login to your account</small>

        </div>
        <button className='bg-lime-600 my-10 max-w-fit mx-auto rounded-md hover:bg-lime-700' onClick={() => window.location.href = 'index.html'}>
            <p className='m-2 text-white'>Close</p>
        </button>
    </div>
  )
}

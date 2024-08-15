import React from 'react';
import "./App.css";

interface GreetingProps {
    name: string;
}

const GreetingRevou = ({ name }: GreetingProps) => {
    return (
        <div className='my-20'>
        <h1 className="text-center text-4xl mb-4">Welcome to our website!</h1>
        <h2 className="text-center text-xl mb-4">We are {name}</h2>
        <p className='text-center font-light'>Empowering the Future of Information Technology. Today.</p>
        <p className='text-center font-light'>Transforming the Digital Landscape. One Solution at a Time.</p>
        <p className='text-center font-light'>Innovate. Disrupt. Elevate. The Space Bin Way.</p>
        </div>
    );
};

export default GreetingRevou;
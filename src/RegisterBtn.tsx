import React from "react";

interface RegisterClick {
    onRegisterClick: () => void;
}
const RegisterBtn = ({ onRegisterClick }: RegisterClick) => {
    
  return (
    <div>
        <div className="container bg-gray-100 p-0 mx-0 text-center max-w-full py-7">
            <h1 className="title">don't have an account yet?</h1>
            <button onClick={onRegisterClick} className="button rounded-md">Register</button>
        </div>
    </div>
  )
}

export default RegisterBtn
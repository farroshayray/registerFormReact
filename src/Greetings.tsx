import React, { useState } from 'react'

interface GreetingProps {
  uname: string;
}
const Greetings = ({ uname }: GreetingProps) => {
  const [message, setMessage] = useState("tes");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  return (
    <div>
        <h1>Greeting, {uname}</h1>
        <input type="text" value={message} onChange={handleChange}/>
    </div>
  )
}

export default Greetings
import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const minus =() => {
        setCount(count - 1);
    };
    const reset =() => {
        setCount(0);
    };
    return (
        <div className="bg-slate-400 flex flex-col">
            <p className="text-center mt-2">Count: {count}</p>
            <button onClick={increment} className="countButton rounded-md bg-slate-500 p-2 flex mx-auto my-2">increment</button>
            <button onClick={minus} className="countButton rounded-md bg-slate-500 p-2 flex mx-auto my-2">decrement</button>
            <button onClick={reset} className="resetButton rounded-md bg-slate-500 p-2 flex mx-auto mb-2">reset</button>
        </div>
    );
    };
    export default Counter
import React, {useState} from "react";
function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }

    return(
        <>
        <center>
            <h2>Counter:{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </center>
        </>
    )
}
export default Counter
import React,{useState} from 'react';

function Hooks(){
    const [count,setState] = useState(100);

    return (
        <div>
            <h1>Hooks counter - {count}</h1>
            <button onClick={()=>{setState(count-1)}}>Click Me</button>
        </div>
    )
}

export default Hooks;
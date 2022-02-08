import React,{useState,useEffect} from 'react';

function UseEffect (){
    const [count,setState] = useState(1);

    useEffect(()=>{
        console.warn("stateUpdated"+count);
    })

    return (
        <div>
            <h1>Hooks useEffect - {count}</h1>
            <button onClick={()=>{setState(count+1)}}>Update Me</button>
        </div>
    )
}

export default UseEffect;
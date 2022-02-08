import React from 'react';

export default function Functional_Approach(){

    function testRun(){
        alert("Checking Alert")
    }

    return (
        <div >
            <h1>Hello. Check onClick event with Functional Approach.</h1>
            <button onClick={testRun}>clickMe</button>
        </div>
    )

}
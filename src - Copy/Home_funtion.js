import React from 'react';

export default function Home_funtion(arg){

    const getAlert=(txt)=>{
        // alert(txt)
    }

    return(
        <div>
            <h1 onClick={getAlert(arg.text)}>{arg.text}</h1>
            <h2>{arg.data.fname} {arg.data.lname}</h2>
        </div>
    )
}
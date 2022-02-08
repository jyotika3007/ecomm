import React from 'react';

class Life_cycle extends React.Component
{

    // First Constructor Calls
    constructor(){
        super();
        console.warn("Constructor");
    }
    
    // Atlast Mounting call when data is ready
    componentDidMount(){
        console.warn("Component Mount")
    }


    // Second Render Calls
    render(){
        console.warn("Render")
        return(
            <div>
                <h1>Life Cycle Methods</h1>
            </div>
        )
    }
}

export default Life_cycle
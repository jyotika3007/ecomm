import React from 'react';

class State_update extends React.Component
{
    constructor(){
        super();
        this.state = {
            'name': 'Riya',
            'count' : 0
        }
    }

    updateState(){
        this.setState({
            'name' : 'Jyotika',
            'count' : this.state.count+1
        })
    }

    render(){

        console.warn("render")

        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{ this.updateState() }}>Click Me</button>
            </div>
        )
    }

}

export default State_update;
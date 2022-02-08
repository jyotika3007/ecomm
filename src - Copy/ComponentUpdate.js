import React from 'react';

class ComponentUpdate extends React.Component
{
    constructor(){
        super();
        this.state = {
            name : null,
            email : null
        }
    }

    componentDidUpdate(){
        if(this.state.name == null){
            this.setState({
                name : "Jyotika"
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.name} </h1>
                <h1>Hello {this.state.email} </h1>
                <button onClick={()=>{this.setState({email: 'jyotika@gmiail.com'})}}>  Click Me </button>
            </div>
        )
    }
}

export default ComponentUpdate
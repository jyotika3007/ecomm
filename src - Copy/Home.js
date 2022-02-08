import React from 'react';

class Home extends React.Component{
    
    componentDidMount(){
        console.warn("code executed")
    }
    componentDidCatch(){
        console.warn('code catched')
    }
    render(){
        return (
            <div>
                <h1>{this.props.text}</h1>
                <h1>{this.props.data.fname}</h1>
                <h1>{this.props.data.lname}</h1>
            </div>
        )
    }
}

export default Home;
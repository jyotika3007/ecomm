import React from 'react';

class ComponentUnmount extends React.Component
{
    componentWillUnmount(){
        alert("User deleted successfully.");
    }
    
    render(){
        return (
            <div>
                <ul>
                    <li>Name : Jyotika</li>
                    <li>Email : jyotika@gmail.com</li>
                    <li>Contact : 9876543120</li>
                </ul>
            </div>
        )
    }

}


export default ComponentUnmount;
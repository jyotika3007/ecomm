import React,{Component} from 'react';
import reactDom from 'react-dom';

class Other extends React.Component{
    render(){
        return reactDom.createPortal(
            <h1>Portal Component</h1>,
            document.getElementById("other")
        )
    }
}

export default Other;
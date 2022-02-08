import React from 'react';
import './Custom.css';

export default function Style(props){

    const h2 = {
        color : '#00ff00',
        fontSize: '28px'
    }
    const h3 = {
        color : '#0000ff',
        fontSize: '38px'
    }


    return (
        <div>
            <h1 class="header">Apply Style to data</h1>
            <h2 style={h2}>I am H2.</h2>
            <h3 style={ props.data == 'custom' ? h3 : h2 }>I am H3.</h3>
        </div>
    )
}
import React from 'react';

class ListMap extends React.Component{
    constructor(){
        super();
        this.state = {
            list : [
                { name : "asd", email : "asd@asd.com" , phone : 123 },
                { name : "qwe", email : "qwe@qwe.com" , phone : 125 },
                { name : "zxc", email : "zxc@zxc.com" , phone : 127 }
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>Listing with Map</h1>
                {
                    this.state.list.map( (item)=>
                        <div>
                            <span>Name : {item.name} , Email : {item.email} , Phone : {item.phone}</span>
                        </div>

                    )
                }
            </div>
        )
    }
}

export default ListMap;
import React from 'react';

class ApiCall extends  React.Component{
    constructor(){
        super();
        this.state = {
            users : null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result)
                this.setState({users : result.data })
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Fetch Api Data</h1>

                <ul>
                    {
                    this.state.users ?
                    this.state.users.map((item,i)=>
                        <li>{i} ---- {item.first_name} {item.last_name} ------------- {item.email}</li>
                    )
                    :
                    <li>No data found</li>
                    }
                </ul>
            </div>
        )
    }
}

export default ApiCall;
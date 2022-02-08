import React from 'react';

class Forms extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            password : "",
            nameError : null,
            passwordError : null
        }
    }
    
    validate(){
        console.warn(this.state)
        if(!this.state.name.includes("@") && this.state.password.length <= 5){
            console.warn("1")
            this.setState({
                nameError : "Invalid Name",
                passwordError : "Password should not be less than 5 characters."
            })
        }
        else if(!this.state.name.includes("@")){
            console.warn("2")
            this.setState({
                nameError : "Invalid Name",
            })
        }
        else if(this.state.password.length <= 5){
            console.warn("3")
            this.setState({
                passwordError : "Password should not be less than 5 characters.",
            })
        }
        else{
            console.warn("4")
            return true;
        }
    }

    submit(){

        this.setState({
            nameError : null,
            passwordError : null
        })

        if(this.validate()){
            alert("Form has been submitted.");
        }
        // console.warn(this.state);
    }

    render (){
        return(
            <div>
                <h1>Form Creation & Validations in React</h1>

                <input type="text" name="name" onChange={(e)=>{this.setState({ name : e.target.value })}} />
                <p style={{color: "red"}}>{this.state.nameError}</p>
                <br/><br/>

                <input type="password" name="password" onChange={(e)=>this.setState({ password : e.target.value })} />
                <p style={{color: "red"}}>{this.state.passwordError}</p>
                <br/><br/>

                <button onClick={()=>{this.submit()}}>Submit</button>
            </div>
        )
    }
}

export default Forms;
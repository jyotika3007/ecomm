import logo from './logo.svg';
import './App.css';
// import Home_new from './Home';
// import Homefunc from './Home_funtion';
// import StateFunc from './State_update';
import ToggleText from './Toggler';
import FuncApp from './Functional_Approach';
import LifeCycle from './Life_cycle';
import CompUpdate from './ComponentUpdate';
import CompUnmount from './ComponentUnmount';
import Hooks from './Hooks';
import UseEffect from './UseEffect';
import React from 'react';
import Forms from './Forms';
import ListMap from './ListMap';
import Style from "./Style";
import Routing from './Routing';
// import ApiCall from './ApiCall';
import Other from './Other';
 
 

// function App() {
  class App extends React.Component{
    // constructor()
    // {
    //   super();
    //     this.state = {
    //       toggle:true
    //     }
    // }
  
render(){
  
 
  return (
    <div className="App">

    <Other />

    {/* <ApiCall /> */}

    {/* <Routing /> */}

    {/* <Style data="custom" /> */}

    {/* <ListMap /> */}

    {/* <Forms /> */}

{/* <UseEffect /> */}

    {/* <Hooks /> */}

    {/* Example For componentWillUnmount */}
    {/* <h1>React : Component will Unmount</h1>    {
      this.state.toggle ? <CompUnmount /> : null
    }
    <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}> Delete USer </button> */}

      {/* <StateFunc /> */}
      {/* <ToggleText /> */}
      {/* <FuncApp /> */}
      {/* <LifeCycle /> */}
      {/* <CompUpdate /> */}

      


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           React Turotial JS
        </a>

        <Home_new text="class component" data={{'fname': 'Riya','lname': 'Sethi'}}/>
        <Homefunc text="I am dynamic functional component." data={{'fname' : 'Jyotika', 'lname' : 'Sethi'}} />
         

      </header>
      */}
    </div>
  );
}
  }

export default App;

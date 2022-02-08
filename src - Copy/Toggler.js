import React from 'react';

class Toggler extends React.Component {

  constructor(){
    super();
    this.state = {
      show:true
    }
  }


  render(){
  
  return (
    
    <div>

{
  this.state.show ?
  <p>Click To hide & Show Me</p>
  : null
}

<button onClick={()=>this.setState({show: !this.state.show})}>Toggle Me</button>

</div>
);
  
}
}


  

export default Toggler;

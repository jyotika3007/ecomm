import React from 'react';
import LifeCycle from './Life_cycle';
import Style from './Style';
import Forms from './Forms';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Routing extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Router>
                    <ul>
                        <li><Link to="">LifeCycle</Link></li>
                        <li><Link to="/forms">Forms</Link></li>
                        <li><Link to="/style">Style</Link></li>
                    </ul>
                    
                    
                    

                    <Route exact path="/" component={LifeCycle} />
                    <Route path="/forms" component={Forms} />
                    <Route path="/style" component={Style} />
                </Router>
            </div>
        )
    }
}

export default Routing;
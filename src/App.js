import React, { useEffect } from 'react'
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import Payment from './Payment/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './Firebase/firebase';
import { useStateValue } from './StateProvider';

function App(){

	const [{}, dispatch] = useStateValue();

	//Create a listener to keep track of login user:

	useEffect(()=>{
		// will only run once when the app component loads...
		auth.onAuthStateChanged(authUser=> {
			console.log('User is ==>>>', authUser)
			if(authUser){
				//User just logged in or the user was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			}
			else{
				// the user is logged out.
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})

	}, [])

  	return(
	  	<Router>
	    	<div className="App">  					    
		    	<Switch>
		    		<Route path="/login">
					    <Login />
				    </Route>

				    <Route path="/register">
					    <Register />
				    </Route>

				    <Route path="/payment">
					    <Header />
					    <Payment />
					    <Footer />
				    </Route>
		    		
		    		<Route path="/checkout">
					    <Header />
					    <Checkout />
					    <Footer />
				    </Route>
		    	
		    		<Route path="/">
						<Header />   
					    <Home />
					    <Footer />
					</Route>

		    	</Switch>

	    	</div>
	  	</Router>
    )
}


export default App
import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from '../Firebase/firebase';

function Login(argument) {

	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e)=>{
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email,password)
			.then(user => {
				console.log(user)
				history.push('/')
			})
			.catch(err => alert(err.message))

		// Some fancy firebase login stuff here !!!
	}

	return (
		<div className="login">
			<Link to="/">
				<img src="/amazon.png" className="login_logo"  />
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>

				<form>

					<h5>E-mail</h5>
					<input type="email" value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />

					<button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

				</form>

				<p>
					By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Tnteres-Based Ads Notice.
				</p>

				<Link to="/register">
				<button className="login__registerButton">Create your Amazon account</button>
				</Link>
			</div>

		</div>
		)
}


export default Login;
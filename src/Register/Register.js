import React, { useState } from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from '../Firebase/firebase';

function Register(argument) {

	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email,password)
			.then((user)=>{
				console.log(user)
				if(user){
					history.push('/')
				}
			})
			.catch(err => alert(err.message))

	}

	return (
		<div className="register">
			<Link to="/">
				<img src="/amazon.png" className="login_logo"  />
			</Link>

			<div className="register__container">
				<h1>Create Account</h1>

				<form>

					<h5>E-mail</h5>
					<input type="email" value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />

					<button type="submit" onClick={register} className="register__signInButton">Sign Up</button>

				</form>

				<p>
					By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Tnteres-Based Ads Notice.
				</p>

				<Link to="/login">
				<button className="register__registerButton">Already have an account? <span className="registter__loginLink"> &nbsp;Click here</span></button>
				</Link>
			</div>

		</div>
		)
}


export default Register;
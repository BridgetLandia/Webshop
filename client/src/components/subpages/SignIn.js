import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../actions/userActions';

export default function SignIn(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const userSignIn = useSelector((state) => state.userSignIn);
	const { loading, userInfo, error } = userSignIn;
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (userInfo) {
				props.history.push('/');
			}
			return () => {
				//
			};
		},
		[ userInfo ]
	);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(signIn(email, password));
	};
	return (
		<div className="form">
			<form onSubmit={submitHandler}>
				<ul className="form-container">
					<li>
						<h2>Bejelentkezés</h2>
					</li>
					<li>
						{loading && <div>Loading...</div>}
						{error && <div>{error}</div>}
					</li>
					<li>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
					</li>
					<li>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</li>
					<li>
						<button type="submit" className="button primary">
							Sign In
						</button>
					</li>
					<li>New here?</li>
					<li>
						<Link to="/register" className="button secondary text-center">
							Create your account
						</Link>
					</li>
				</ul>
			</form>
		</div>
	);
}

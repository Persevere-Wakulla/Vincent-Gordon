import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForumLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ email, password });
		setEmail("");
		setPassword("");
	};

	return (
		<main>
			<h1>Log into your account</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					type="text"
					name="email"
					id="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
        <label htmlFor='password'>Password</label>
        <input 
        type='password'
        name='password'
        id='password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>SIGN IN</button>
        <p>
          Dont have an account? <Link to='/register'>Create one</Link>
        </p>
			</form>
		</main>
	);
};

export default ForumLogin;

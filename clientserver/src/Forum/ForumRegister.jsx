import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForumRegister = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ userName, email, password });
		setEmail("");
		setUserName("");
		setPassword("");
	};
	return (
		<main>
			<h1>Create an Account</h1>
			<form>
				<label>Username</label>
				<input
					type="text"
					name="userName"
					id="userName"
					required
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<label>Email Address</label>
				<input
					type="text"
					name="email"
					id="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input type="password"
         name="password"
          id="password"
           required
           value={password}
           onChange={(e) => setPassword(e.target.value)}
            />
            <button>REGISTER</button>
            <p>
              Have an account? <Link to="/">Sign In</Link>
            </p>
			</form>
		</main>
	);
};

export default ForumRegister;

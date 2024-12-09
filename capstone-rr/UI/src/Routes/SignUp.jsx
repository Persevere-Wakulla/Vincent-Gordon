import Logo from "../assets/images/portfoliofavi.png";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
	const navigate = useNavigate();
	const [loggedIn, setLoggedIn] = useOutletContext("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [alreadySignedUp, setAlreadySignedUp] = useState(false);
	const [usedEmail, setUsedEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userLogin, setUserLogin] = useState(false);
	const [confirm, setConfirm] = useState("");

	const handleSubmit = async function (e) {
		e.preventDefault();

		fetch("http://localhost:8000/api/mongodb/add/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			mode: "cors",
			body: JSON.stringify({
				firstName,
				lastName,
				userName,
				email,
				password,
				confirm,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 209) {
					setUsedEmail(() => data.statusText);
				}
			})
			.catch((err) => {
				if (err) {
					setAlreadySignedUp(true);
					wipeVal();
					setTimeout(() => {
						navigate("/");
					}, 1500);
				}
			})
			.finally(() => {
				// setUserLogin((x) => !x);
				// navigate("/main");
			});
	};

	return (
		<section id="signUpPage" className="none">
			<article>
				<form id="signUpForm" action="POST" onSubmit={(e) => handleSubmit(e)}>
					<div className="signUpContainer">
						<div className="storeLogo2">
							<img src={Logo} alt="logo" />
							<span className="firstLetter">L</span>
							<span className="middleLetter">&amp;</span>
							<span className="lastLetter">D</span>
						</div>
						<h1>Sign Up</h1>
						{alreadySignedUp ? (
							<div style={{ color: "red" }}>
								Please Login to your Account on login Page
							</div>
						) : (
							<p>please fill in this form to create an account</p>
						)}

						<hr></hr>
						<label htmlFor="fname">first name</label>
						<input
							type="text"
							placeholder="first name..."
							required
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
							name="fname"
							id="fname"
						/>
						<label htmlFor="lname">last name</label>
						<input
							type="text"
							placeholder="last name..."
							name="lname"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							id="lname"
						/>
						<label htmlFor="uname">User Name</label>
						<input
							type="text"
							placeholder="user name..."
							name="uname"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							id="uname"
						/>
						{usedEmail.length > 0 ? (
							<>
								<label htmlFor="email">email</label>
								<input
									type="text"
									placeholder="email..."
									name="email"
									value={email}
									id="email"
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="on"
								/>
								<div className="toast border bg-black text-center border-red-700 rounded-md w-[20rem]">
									Email already Registered! If This is your Email Return to
									Login Page!
								</div>
							</>
						) : (
							<>
								<label htmlFor="email">email</label>
								<input
									type="text"
									placeholder="email..."
									name="email"
									value={email}
									id="email"
									onChange={(e) => setEmail(e.target.value)}
									autoComplete="on"
								/>
							</>
						)}
						<label htmlFor="password">password</label>
						<input
							type="password"
							placeholder="password..."
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="password"
						/>
						<label htmlFor="psw-repeat">confirm password</label>
						<input
							type="password"
							placeholder="repeat password..."
							name="psw-repeat"
							value={confirm}
							onChange={(e) => setConfirm(e.target.value)}
							id="psw-repeat"
						/>
						<fieldset>
							<legend>Please agree to terms</legend>
							<label className="check-container">
								<input
									type="checkbox"
									id="checkbox"
									readOnly
									defaultChecked={false}
								/>
								<span className="checkbox"></span>
							</label>
							<p>
								by creating an account ypu agree to our.{" "}
								<a id="termsOfPrivacy">Terms &amp; Privacy</a>
							</p>
						</fieldset>
						<label className="check-container rememberMe">
							<input
								type="checkbox"
								onChange={() => setLoggedIn(userName)}
								name="remember"
							/>
							remember me
							<span className="checkbox"> </span>
						</label>
						<div className="formBtns">
							<button
								type="button"
								className="formCancelBtn"
								onClick={() => navigate("/")}
							>
								cancel
							</button>
							<button type="submit" className="formSignUpBtn">
								sign up
							</button>
						</div>
					</div>
				</form>
			</article>
		</section>
	);
}

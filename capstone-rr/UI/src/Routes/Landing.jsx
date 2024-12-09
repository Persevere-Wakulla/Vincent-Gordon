import { useState } from "react";
import Image from "../assets/images/fiji islands.jpg";
import Logo from "../assets/images/portfoliofavi.png";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Landing() {
	const [loggedIn, setLoggedIn] = useOutletContext();
	const [logIn, setLogIn] = useState(false);
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState("");
	async function handleGet(e, user) {
		e.preventDefault();
		try {
			setLoading(true);
			fetch(`http://localhost:8000/api/mongodb/users/check/${user}`)
				.then((res) => res.json())
				.then((data) => data);
		} catch (e) {
			setLoading(false)
			console.log(e.message);
			
		}
	}

	const navigate = useNavigate();
	const UserLogin = function ({ setPassword, setLoggedIn }) {
		return (
			<form
				className="loginBtnContainer"
				onSubmit={(e) => handleGet(e, loggedIn)}
			>
				<div>
					<label htmlFor="uname">
						UserName{" "}
						<input
							type="text"
							onChange={() => setLoggedIn(e.target.value)}
							id="uname"
						/>
					</label>
					<label htmlFor="pword">
						PassWord{" "}
						<input
							type="password"
							onChange={() => setPassword(e.target.value)}
							required
							id="pword"
						/>
					</label>
				</div>
				<div className="landingBtnContainer">
					<button id="signUpBtn" type="submit">
						LogIn
					</button>
					<button id="signInBtn" type="button" onClick={() => setLogIn(false)}>
						Cancel
					</button>
				</div>
			</form>
		);
	};
	return (
		<section id="storeLanding" className="non">
			<h4 className="peer text-2xl border hover:bg-lime-400 duration-1000 transition-all max-sm:bg-red-200 hover:cursor-pointer md:bg-lime-100 rounded w-1/3 hover:text-blue-500 ">
				Testing
			</h4>
			<div className="flex">
				<h4>Another test</h4>
				<h4>Another test 3</h4>
			</div>
			<input type="`text`" className="focus:bg-red-300" />
			<h4 className="hidden peer-hover:flex">Another test</h4>
			<div className="storeLogo">
				<img src={Logo} alt="logo" />
				<span className="firstLetter">L</span>
				<span className="middleLetter">&amp;</span>
				<span className="lastLetter">D</span>
			</div>
			<div className="landingGrid">
				<div className="landing">
					<div className="landingHeader">
						<img className="landingImage" src={Image} alt="fiji" />
						<h1>L &amp; D</h1>
					</div>
					{logIn ? (
						<UserLogin />
					) : (
						<div className="landingBtnContainer">
							<button
								id="signUpBtn"
								type="button"
								onClick={() => navigate("signup")}
							>
								sign up
							</button>
							<button
								id="signInBtn"
								type="button"
								onClick={() => setLogIn(() => true)}
							>
								sign in
							</button>
						</div>
					)}
					<fieldset>
						<legend>Please agree to terms</legend>
						<label htmlFor="terms" className="check-container">
							<input type="checkbox" id="terms" name="terms" />
							<span className="checkbox"></span>
						</label>
						<a href="/#" id="termsOfAgree">
							Terms of Agreement{" "}
						</a>
					</fieldset>
				</div>
			</div>
		</section>
	);
}

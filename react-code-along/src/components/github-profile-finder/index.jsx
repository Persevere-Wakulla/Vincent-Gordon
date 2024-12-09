import { useEffect, useState } from "react";
import User from "./user";
import "./stylz.css";

export default function GithubProfileFinder() {
	const [userName, setUserName] = useState("emilys");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);

	async function fetchGithubUserData() {
		try {
			setLoading(true);
			// const response = await fetch(`https://api.github.com/users/${userName}`);
			const response = await fetch(
				`https://dummyjson.com/users/search?q=${userName}`
			);
			const data = await response.json();
			if (data) {
				setUserData(data);
				setLoading(false);
				setUserName("");
			}
			// console.log(data);
		} catch (e) {
			setErrorMsg(e.message);
			setLoading(false);
		}
	}

	function handleSubmit() {
		fetchGithubUserData();
	}

	useEffect(() => {
		fetchGithubUserData();
	}, []);
	if (errorMsg) {
		return <div>Error Occured! {errorMsg}</div>;
	}

	if (loading) {
		return <div>Page Loading! Please Wait</div>;
	}
	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					type="text"
					name="search-by-username"
					placeholder="Search Github Username..."
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{userData !== null ? <User user={userData} /> : null}
		</div>
	);
}

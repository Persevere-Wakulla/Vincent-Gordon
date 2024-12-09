import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);
	const [searchParam, setSearchParam] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);

	function handleChange(e) {
		const query = e.target.value.toLowerCase();
		setSearchParam(query);
		if (query.length > 1) {
			const filteredData =
				users && users.length
					? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
					: [];
			setFilteredUsers(filteredData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	function handleClick(e) {
        setShowDropdown(false)
		setSearchParam(e.target.innerText);
        setFilteredUsers([])
	}

	async function fetchListOfUsers() {
		try {
			setLoading(true);
			const response = await fetch("https://dummyjson.com/users");
			const data = await response.json();
			if (data && data.users && data.users.length) {
				setUsers(data.users.map((userItem) => userItem.firstName));
				setLoading(false);
				setErrorMsg(null);
			}
		} catch (e) {
			setErrorMsg(e.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchListOfUsers();
	}, []);

	console.log(users, filteredUsers);
	if (errorMsg) {
		return <div>Error Occured! {errorMsg}!</div>;
	}

	return (
		<div className="search-autcomplete-container">
			{loading ? (
				<h1>Loading Data! Please Wait!</h1>
			) : (
				<input
					name="search-users"
					value={searchParam}
					placeholder="Search Users here..."
					onChange={handleChange}
				/>
			)}

			{showDropdown && (
				<Suggestions handleClick={handleClick} data={filteredUsers} />
			)}
		</div>
	);
}

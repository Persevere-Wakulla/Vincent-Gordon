import { useState,useContext } from "react";
import { useLoaderData, NavLink } from "react-router-dom";

export default function SearchBar({func}) {
	const products = useLoaderData();
    function handleSearch (e) {
        let searchQuery = e.target.value
        func(searchQuery)
    }
	
	return (
		<>
			<NavLink to="search" id="search">
				<input
					type="text"
					id="search"
					placeholder="🔍search..."
					onChange={(e) => handleSearch(e)}
				/>
			</NavLink>
		</>
	);
}

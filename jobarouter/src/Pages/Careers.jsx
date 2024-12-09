import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
	const  careers  = useLoaderData();

	return (
		<div className="careers">
			{careers.map((career) => (
				<Link to={career.id.toString()} key={career.id}>
                    <p>Position: {career.title}</p>
                    <p>Based in {career.location}</p>
                    <p>Starting Salary {career.salary}</p>
                </Link>
			))}
		</div>
	);
}

export const careersLoader = async () => {
	const res = await fetch("http://localhost:3000/careers");
    if (!res.ok) throw Error('Could not Fetch Careers!!')
	const data = await res.json();
	return data;

};
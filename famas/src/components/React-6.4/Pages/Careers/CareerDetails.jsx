import { useParams, useLoaderData } from "react-router-dom";

export default function CareerDetails() {
	const { id } = useParams();
	const career = useLoaderData();
	return (
		<div>
			<h2>Planet Details for {career.name} </h2>
			<p>Planet Temp: {career.temperature}</p>
		</div>
	);
}
export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;
	console.dir(id)
	const res = await fetch("http://localhost:3000/" + id);
	if (!res.ok) throw Error ('Could not find that Planet')
	const data = await res.json();
	return data;
};

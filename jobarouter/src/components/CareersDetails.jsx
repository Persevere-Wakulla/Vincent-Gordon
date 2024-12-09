import { useParams, useLoaderData } from "react-router-dom";

export default function CareersDetails() {
	const { id } = useParams();
	const career = useLoaderData();
	return (
		<div className="career-details">
			<h2>Career Details for {career.title}</h2>
			<p>Starting Salary: {career.salary}</p>
			<p>Location: {career.location}</p>
			<div className="details">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
				dignissimos, voluptas cumque temporibus illo ipsam inventore voluptatum
				pariatur aliquid amet laudantium dolores alias fugit eveniet, porro
				excepturi quasi nihil magnam.
			</div>
		</div>
	);
}

export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;
	const res = await fetch("http://localhost:3000/careers/" + id);
    if (!res.ok) throw Error('Could Not Find That Career!!!')
	const data = await res.json();
	return data;
};

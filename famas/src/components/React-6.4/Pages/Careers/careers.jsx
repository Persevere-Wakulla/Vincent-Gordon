import {useLoaderData, Link} from 'react-router-dom'
export default function Careers() {
    const careers = useLoaderData()
	return (
		<div>
			<h1>Careers</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio a
				dolore labore minima perferendis laudantium neque doloremque vitae odio.
                {careers.map(career => (
                    <Link to={career.id.toString()} key={career.name}>
                        <p>{career.name}</p>
                        <p>{career.temperature}</p>
                        </Link>
                ))}
			</p>
		</div>
	);
}

export const getData = async () => {
	const res = await fetch("../../../../../data.json");
	 if (!res.ok) throw Error ('Could not Find Request')
    const data = await res.json()
	return data
};

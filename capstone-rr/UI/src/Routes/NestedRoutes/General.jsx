import { useLoaderData, Link } from "react-router-dom";
import MiniInfoCard from "../../components/MiniInfoCard";
export default function General() {
	const data = useLoaderData();
	const { products } = data;

	return (
		<div>
			<MiniInfoCard data={products} />
		</div>
	);
}

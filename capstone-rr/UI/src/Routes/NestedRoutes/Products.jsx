import { Link, useOutletContext, useLoaderData } from "react-router-dom";
import MiniInfoCard from "../../components/MiniInfoCard";
export default function Products() {
	const product = useLoaderData();
	const {products} = product
 	const [searchQuery, setSearchQuery] = useOutletContext();

	
	let newProduct = products.filter((x) =>
		x.title.toLowerCase().includes(searchQuery)
	);
	const style = {
		textAlign: "center",
		color: "red",
		marginTop: "20rem",
		fontSize: "80px",
	};

	return (
		<div>
			{searchQuery !== "" ? <MiniInfoCard data={newProduct} /> : null}
			{newProduct.length === 0 ? (
				<h1 style={style}>Product does not Exist!</h1>
			) : null}
		</div>
	);
}

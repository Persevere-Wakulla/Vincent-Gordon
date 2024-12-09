import { Link } from "react-router-dom";

export default function MiniInfoCard({ data }) {
	return (
		<div id="product">
			{data && data.length
				? data.map((item) => (
						<Link id="prodCard" to={item.id.toString()} key={item.id}>
							<p>{item.title}</p>
							<img src={item.images[0]} alt={item.title} id="prodCardImg" />
						</Link>
				  ))
				: null}
		</div> 
	);
}

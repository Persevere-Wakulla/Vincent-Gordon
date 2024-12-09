export default function BasketCard({item}) {
	return (
		<div className="flex">
			<h1>{item.title}</h1>
			<img src={item.image} alt="" />
            <p>{item.price.toFixed(2)}</p>
            <p>Qty: {numOfItems}</p>
		</div>
	);
}

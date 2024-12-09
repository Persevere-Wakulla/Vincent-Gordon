

export default function CustomerInfo({item}) {
	return (
		<div className="customerCard">
            <h1>{item.name.firstname}{' '}{item.name.lastname} </h1>
			<p>{item.phone}</p>
			<p>{item.username}</p>
			<p>{item.email}</p>
            <img src={item.image} alt="image" />
            <div>

                <p>{item.address.number}</p>
                <p>{item.address.street}</p>
                <p>{item.address.city}</p>
                <p>{item.address.zipcode}</p>
            </div>
		</div>
	);
}

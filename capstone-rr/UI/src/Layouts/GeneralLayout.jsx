import { Outlet, useOutletContext } from "react-router-dom";

export default function GeneralLayout() {
	const [
		searchQuery,
		setSearchQuery,
		buildCart,
		setBuildCart,
		basket,
		setBasket,
		quantity,
		setQuantity,
		price,
		setPrice,
		
	] = useOutletContext();
	return (
		<>
			<Outlet
				context={[
					searchQuery,
					setSearchQuery,
					buildCart,
					setBuildCart,
					basket,
					setBasket,
					quantity,
					setQuantity,
					price,
					setPrice,
					
				]}
			/>
		</>
	);
}

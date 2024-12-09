import { Outlet } from "react-router-dom";
import SubNav from "../components/SubNav";
import { useOutletContext } from "react-router-dom";
export default function CategoriesLayout() {
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
		counter,
		setCounter,
	] = useOutletContext();

	return (
		<>
			<SubNav />
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
					counter,
					setCounter,
				]}
			/>
		</>
	);
}

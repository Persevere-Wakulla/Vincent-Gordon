import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Breadcrumbs from "../components/Breadcrumbs";
import Logo from "../assets/images/portfoliofavi.png";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import ShoppingBasket from "../components/ShoppingBasket";
export default function MainLayout() {
	const [searchQuery, setSearchQuery] = useState("");
	const [basket, setBasket] = useState(false);
	const [buildCart, setBuildCart] = useState([]);
	const [quantity, setQuantity] = useState(0);
	const [price, setPrice] = useState(0);
	const navigate = useNavigate();

	function getQuery(query) {
		setSearchQuery(query);
	}

	function showBasket() {
		setBasket((curr) => !curr);
	}
	function removeItem({ id, quantity, price }) {
		console.log(id, quantity, price);
		setBuildCart(buildCart.filter((c) => c.id !== id));
		setQuantity((c) => c - quantity);
		setPrice((c) => c - price);
	}

	function clearCart() {
		setBuildCart([]);
		setQuantity(0);
		setPrice(0);
		setBasket(false);
	}
	return (
		<section id="main" className="none">
			<header className="mainHeader">
				<div className="storeLogo3">
					<img src={Logo} alt="logo" />
					<span className="firstLetter">L</span>
					<span className="middleLetter">&amp;</span>
					<span className="lastLetter">D</span>
				</div>
				<SearchBar func={getQuery} />
				<nav className="headerBtns">
					<Nav />
					<div className="basketDiv">
						<ShoppingBasket func={showBasket} />
						<span className="quantity">{buildCart.length}</span>
					</div>
				</nav>
			</header>

			<Breadcrumbs />

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
			{basket && quantity != 0 ? (
				<div className="shoppingCart">
					{" "}
					<button className="closeBtn" onClick={() => setBasket(false)}>
						Close
					</button>
					{buildCart.map((x, i) => (
						<div key={x.id} id={x.id} className="singleItem">
							<h3>
								<span>
									<img src={x.image} alt="" />
								</span>
								{x.title}
							</h3>
							<p style={{ color: "cyan" }}>
								<span style={{ color: "blue" }}>Qty: {x.quantity}</span> Price:
								${x.price.toFixed(2)}
							</p>
							<button onClick={() => removeItem(x)}>Remove Item</button>
						</div>
					))}{" "}
					<div className="checkOutBtns">
						<div>Total Number of Items: {quantity}</div>
						<div className="checkOut">Price Total: {price.toFixed(2)}</div>
					</div>
					<div className="checkOutBtns">
						<button onClick={() => clearCart()}>Cancel Order</button>
						<button className="checkOut" onClick={() => navigate("/")}>
							Check Out
						</button>
					</div>
					<hr />
				</div>
			) : null}
		</section>
	);
}

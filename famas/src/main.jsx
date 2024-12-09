import {React,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";

import {Route, Routes, NavLink, BrowserRouter } from "react-router-dom";

import { useLocation } from "react-router";
import Mercury from "./components/React-Router/Mercury";
import Venus from "./components/React-Router/Venus";
import Earth from "./components/React-Router/Earth";
import Mars from "./components/React-Router/Mars";
import Jupiter from "./components/React-Router/Jupiter";
import Saturn from "./components/React-Router/Saturn";
import Uranus from "./components/React-Router/Uranus";
import Neptune from "./components/React-Router/Neptune";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylz.css";
import Planet from "./components/React-Router/Planet";



const Apple = () => {
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const [planetData, setPlanetData] = useState([]);
	const location = useLocation();
	async function fetchData() {
		try {
			setLoading(true);
			const res = await fetch("../data.json");
			const data = await res.json();
			if (data) {
				setPlanetData(data);
			}
		} catch (e) {
			setErrorMsg(e.message);
		}
	}
	useEffect(() => {
		fetchData();

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);




	if (errorMsg) return <div>Error Occured! {errorMsg}</div>;

	return (
		<header>
			<nav className="nav">
				<h1>THE PLANETS</h1>
				<NavLink  className={location.pathname.includes('mercury') ? 'merc' : ''} to="/mercury">Mercury</NavLink>

				<NavLink  className={location.pathname.includes('venus') ? 'venu': ''} to="/venus">Venus</NavLink>

				<NavLink  className={location.pathname.includes('earth') ? 'eart': ''} to="/earth">Earth</NavLink>

				<NavLink className={location.pathname.includes('mars') ? 'mars' : ''} to="/mars">Mars</NavLink>

				<NavLink  className={location.pathname.includes('jupiter') ? 'jupi' : ''}to="/jupiter">Jupiter</NavLink>

				<NavLink  className={location.pathname.includes('saturn') ? 'satu' : ''}to="/saturn">Saturn</NavLink>

				<NavLink  className={location.pathname.includes('uranus') ? 'uran' : ''}to="/uranus">Uranus</NavLink>

				<NavLink className={location.pathname.includes('neptune') ? 'nept' : ''} to="/neptune">Neptune</NavLink>
			</nav>
			<main>
				<Routes>
					<Route
						path='/mercury'
						element={
							<Mercury
								loading={loading}
								component={<Planet data={planetData[0]} />}
							/>
						}
					/>
					<Route
						path="venus"
						element={
							<Venus
								loading={loading}
								component={<Planet data={planetData[1]} />}
							/>
						}
					/>
					<Route
						path="earth"
						element={
							<Earth
								loading={loading}
								component={<Planet data={planetData[2]} />}
							/>
						}
					/>
					<Route
						path="mars"
						element={
							<Mars
								loading={loading}
								component={<Planet data={planetData[3]} />}
							/>
						}
					/>
					<Route
						path="jupiter"
						element={
							<Jupiter
								loading={loading}
								component={<Planet data={planetData[4]} />}
							/>
						}
					/>
					<Route
						path="saturn"
						element={
							<Saturn
								loading={loading}
								component={<Planet data={planetData[5]} />}
							/>
						}
					/>
					<Route
						path="uranus"
						element={
							<Uranus
								loading={loading}
								component={<Planet data={planetData[6]} />}
							/>
						}
					/>
					<Route
						path="neptune"
						element={
							<Neptune
								loading={loading}
								component={<Planet data={planetData[7]} />}
							/>
						}
					/>
				</Routes>
			</main>
		</header>
	);
};


ReactDOM.createRoot(document.getElementById("root")).render(
	
		<BrowserRouter>
		<Apple />
		</BrowserRouter>

);
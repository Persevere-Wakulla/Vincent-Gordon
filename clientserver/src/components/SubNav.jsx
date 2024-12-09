import { NavLink } from "react-router-dom";
export default function SubNav() {
	return (
		<div className="headerBtns subNav">
		
			<NavLink to='electronics'>Electronics</NavLink>
			<NavLink to='jewelery'>Jewelery</NavLink>
			<NavLink to='watches'>Watches</NavLink>
			<NavLink to='motorcycles'>MotorCycles</NavLink>
		</div>
	);
}

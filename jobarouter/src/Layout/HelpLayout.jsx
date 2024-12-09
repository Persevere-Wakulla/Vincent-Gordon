import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
	return (
		<div className="help-layout">
			<h2>Website Help</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non
				corporis reprehenderit provident aliquam quis autem pariatur cupiditate
				aut ipsa. Vero soluta nobis debitis, ducimus magnam perferendis unde
				iusto reiciendis?
			</p>
			<nav>
				<NavLink to="faq">View our FAQ</NavLink>
				<NavLink to="contact">Contact Us</NavLink>
			</nav>

			<Outlet />
		</div>
	);
}

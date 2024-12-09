import { Outlet,useOutletContext } from "react-router-dom";
import SupportNav from "../components/SupportNav";
export default function SupportLayout() {
	return (
		<div>
			<SupportNav />
			<Outlet />
		</div>
	);
}

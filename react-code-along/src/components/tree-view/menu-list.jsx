import MenuItem from "./menu-item";
import './stylz.css'

export default function MenuList({ list = [] }) {
	
	return (
		<ul className="menu-list-container">
			{list && list.length
				? list.map((listItem,index) => <MenuItem key={index} item={listItem} />)
				: null}
		</ul>
	);
}
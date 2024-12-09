import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
	function handleToggleChildren(getCurrentLabel) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
		});
	}
	console.log(displayCurrentChildren);
	return (
		<li>
			<div className="menu-item">
				<p> {item.label} </p>
				{item && item.children && item.children.length ? (
					<span onClick={() => handleToggleChildren(item.label)}>
						{displayCurrentChildren[item.label] ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-node-minus"
								viewBox="2 9 25 9"
							>
								<path
									fillRule="evenodd"
									d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM8 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 8 8"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								fill="currentColor"
								className="bi bi-node-plus"
								viewBox="2 9 25 9"
							>
								<path
									fillRule="evenodd"
									d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5M1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
								/>
							</svg>
						)}
					</span>
				) : null}
			</div>
			{item &&
			item.children &&
			item.children.length > 0 &&
			displayCurrentChildren[item.label] ? (
				<MenuList list={item.children} />
			) : null}
		</li>
	);
}

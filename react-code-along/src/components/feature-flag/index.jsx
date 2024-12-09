import { useContext } from "react";
import Accordian from "../accordian/index.jsx";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color/index.jsx";
import TicTacToe from "../tic-tac-toe/index.jsx";
import TreeView from "../tree-view/index.jsx";
import menus from "../tree-view/data.js";
import { FeatureFlagsContext } from "./context/index.jsx";

export default function FeatureFlags() {
	const { enableFlags, loading } = useContext(FeatureFlagsContext);

	const componentsToRender = [
		{
			key: "showLightAndDarkMode",
			component: <LightDarkMode />,
		},
		{
			key: "showTicTacToeBoard",
			component: <TicTacToe />,
		},
		{
			key: "showRandomColorGenerator",
			component: <RandomColor />,
		},
		{
			key: "showAccordian",
			component: <Accordian />,
		},
		{
			key: "showTreeView",
			component: <TreeView menus={menus} />,
		},
	];
	function checkEnabledFlags(getCurrentKey) {
		return enableFlags[getCurrentKey];
	}

	if (loading) {
		return <div>Page loading! Please Wait!</div>;
	}

	return (
		<div>
			<h1>Feature Flags</h1>
			{componentsToRender.map(componentItem =>
				checkEnabledFlags(componentItem.key) ? componentItem.component : null
			)}
		</div>
	);
}

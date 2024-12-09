import React from "react";
import { Outlet } from "react-router-dom";

const ForumLayout = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default ForumLayout;

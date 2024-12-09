import React from "react";
import { NavLink } from "react-router-dom";


const ForumNav = () => {
	const {enqueueSnackbar} = useSnackbar()
  const signOut = () => {

  }
	return (
		<div className="headerBtns subNav">
			<NavLink to="register">Register</NavLink>
			<NavLink to="login">Login</NavLink>
			<NavLink to="dashboard">Dashboard</NavLink>
			<NavLink to="replies">Replies</NavLink>
		</div>
	);
};

export default ForumNav;

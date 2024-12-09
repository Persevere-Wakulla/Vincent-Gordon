import React from "react";
import { NavLink } from "react-router-dom";
import {useSnackbar} from 'notistack'

const ForumNav = () => {
	const {enqueueSnackbar} = useSnackbar()
  const signOut = () => {
    enqueueSnackbar('User signed out!', {variant: 'success'})
  }
	return (
		<div className="headerBtns subNav">
			<h2>Live Feed</h2>
			<NavLink to="register">Register</NavLink>
			<NavLink to="login">Login</NavLink>
			<NavLink to="dashboard">Dashboard</NavLink>
			<NavLink to="replies">Replies</NavLink>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
};

export default ForumNav;

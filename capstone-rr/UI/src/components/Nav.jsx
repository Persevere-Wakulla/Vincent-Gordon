import { NavLink } from "react-router-dom";
import { useState } from "react";
import {Navigate} from 'react-router-dom'

export default function Nav() {
	 const [user,setUser] = useState('Vinny')
    if (!user) {
        return <Navigate to='/' replace={true}/>
    }
	return (
		<>
			<NavLink index='true' >Home</NavLink>
			<NavLink to="categories" >Categories</NavLink>
			<NavLink to="forum" >Forum</NavLink>
			<NavLink to="profile" >Profile</NavLink>
			<NavLink to="support" >Support</NavLink>
			<button onClick={() => setUser(null)}>LogOut</button>
		</>
	);
}

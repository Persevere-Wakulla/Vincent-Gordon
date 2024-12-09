import { useState } from "react";
import {Navigate} from 'react-router-dom'
export default function About() {
    const [user,setUser] = useState('Vinny')
    if (!user) {
        return <Navigate to='/' replace={true}/>
    }
	return (
		<div className="about">
			<h2>About us</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat
				cupiditate excepturi. Harum non sit autem architecto ratione neque
				commodi.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est vel,
				temporibus doloribus laborum dolorum doloremque non, eos quae labore
				quaerat ipsa, iure quasi praesentium. Vel praesentium nobis dolores
				tenetur inventore. Ducimus atque saepe itaque possimus asperiores optio
				porro aut quo!
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam at fuga
				numquam dolorum quaerat blanditiis.
			</p>
            <button onClick={() => setUser(null)}>LogOut</button>
		</div>
	);
}

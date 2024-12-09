import React, { useState } from "react";
import ForumNav from "./ForumNav";
import {Outlet} from 'react-router-dom'

const ForumHome = () => {
	const [thread, setThread] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ thread });
		setThread("");
	};
	return (
		<>
			<ForumNav />
			<main>
				<h2>Create a Thread</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="thread">Title / Description</label>
						<input
							type="text"
							name="thread"
							required
							value={thread}
							onChange={(e) => setThread(e.target.value)}
						/>
					</div>
					<button>CREATE THREAD</button>
				</form>
			</main>
      <Outlet />
		</>
	);
};

export default ForumHome;

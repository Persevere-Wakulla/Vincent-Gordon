export default function User({ user }) {
	// const {avatar_url,followers,following,public_repos,created_at,login,name} = user
	const [{ image, role, age, firstName, username, birthDate }] = user.users;
	console.log(user.users);

	// const createdDate = new Date(created_at)
	const createdDate = new Date(birthDate);

	return (
		<div className="user">
			<div>
				<img src={image} className="avatar" alt="User" />
			</div>
			<div className="name-container">
				<a href="">{firstName || username}</a>
				{/* <a href={`https://github.com/${login}`}>{name || login}</a> */}
				<p>
					User joined on{" "}
					{`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
						month: "short",
					})} ${createdDate.getFullYear()}`}
				</p>
			</div>
			<div className="profile-info">
				<div>
					<p>Public Repos</p>
					<p>{role}</p>
				</div>
				<div>
					<p>Followers</p>
					<p>{age}</p>
				</div>
				<div>
					<p>Following</p>
					<p>{username}</p>
				</div>
			</div>
		</div>
	);
}

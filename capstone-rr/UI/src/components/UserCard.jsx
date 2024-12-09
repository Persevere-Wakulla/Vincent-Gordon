import {useNavigate,useLoaderData} from 'react-router-dom'
export const UserCard = ({ item }) => {
	const navigate = useNavigate();
	const account = useLoaderData();

	function handleClick(e) {
		let userName = e.target.textContent;
        navigate('/home',userName)
		
	}
	
	return (
		<div className="profileContainer" key={item.id}>
			<img id="profilePic" src={item?.image} alt="item.name" />
			<div className="nameContainer">
				<p id="firstName">{item.name.firstname}</p>
				<p id="lastName">{item.name.lastname}</p>
				<button
					onClick={(e) => handleClick(e)}
					className="profileLogin"
					type="button"
				>
					{item.username}
				</button>
			</div>
		</div>
	);
};
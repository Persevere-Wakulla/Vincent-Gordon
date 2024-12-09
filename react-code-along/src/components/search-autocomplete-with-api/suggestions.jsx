export default function Suggestions({ data, handleClick }) {
	return (
		<ul className="suggestions-container">
			{data && data.length
				? data.map((item, index) => (
						<li style={{listStyle:'none'}} onClick={handleClick} key={index}>
							{item}
						</li>
				  ))
				: null}
		</ul>
	);
}

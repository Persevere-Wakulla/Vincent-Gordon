const Venus = ({ component, loading }) => {
	return (
		<div>
			{loading ? (
				<>
					<h1>Loading</h1>
				</>
			) : (
				<>{component ? component : null}</>
			)}
		</div>
	);
};

export default Venus;

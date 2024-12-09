import Usertabs from "../usertabs";
const ForumHeader = () => {
	return (
		<Usertabs
			subpage={[
				"New Thread",
				"My Thread",
				"Conversation",
				"Archives",
				"Flagged",
			]}
		/>
	);
};

export default ForumHeader;

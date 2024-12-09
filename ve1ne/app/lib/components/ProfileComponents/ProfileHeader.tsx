import Usertabs from "../usertabs";
const ProfileHeader = () => {
	return (
		<Usertabs
			subPage={["New Feed", "Buzz", "Connections", "Media", "Recommend"]}
		/>
	);
};

export default ProfileHeader;

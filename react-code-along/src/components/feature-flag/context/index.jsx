import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
	const [loading, setLoading] = useState(false);
	const [enableFlags, setEnableFlags] = useState({});
	
	async function fetchFeatureFlags() {
		try {
			// Original Service Call
			setLoading(true)
			const response = await featureFlagsDataServiceCall()
			setEnableFlags(response)
			setLoading(false)
		} catch (e) {
			setLoading(false)
			throw new Error(e)
		}
	}

	useEffect(() => {
		fetchFeatureFlags();
	}, []);
	
	return (
		<FeatureFlagsContext.Provider value={{enableFlags,loading}}>
			{children}
		</FeatureFlagsContext.Provider>
	);
}





import React, { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
	const [storedValue, setStoreValue] = useState(() => {
		if (window === undefined) {
			return defaultValue;
		}
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : defaultValue;
		} catch (e) {
			console.log(e);
			return defaultValue;
		}
	});

	const setValue = (value) => {
		try {
			setStoreValue(value);
			if (window != undefined) {
				localStorage.setItem(key, JSON.stringify(value));
			}
		} catch (e) {
			console.log(e);
		}
	};
	return [storedValue, setValue];
};

export default useLocalStorage
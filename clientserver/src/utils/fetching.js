import React, { useState } from "react";
import {useParams} from 'react-router-dom'
export const fetchLoader = async (path) => {
    const res = await fetch(`https://dummyjson.com/products/category/${path}`)
    if (!res.ok) throw Error('Could Not Fetch Data')
    const data = await res.json()    
    return data
}
export const productLoader = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=194`)
    if (!res.ok) throw Error('Could Not Fetch Products')
    const data = await res.json()    
    return data
}

export const detailsLoader = async ( {params}) => {
    const {id} = params
    const res = await fetch(`https://dummyjson.com/products/` + id)
    if (!res.ok) throw Error('Could not find the page')
    const data = await res.json()
    return data
}

export const useLocalStorage = (key, defaultValue) => {
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


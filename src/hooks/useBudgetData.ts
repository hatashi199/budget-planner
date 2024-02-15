import { useState } from 'react';

export const useLocalStorageItems = <T>(key: string, initialValue: T) => {
	const getLocalData = () => {
		const data = localStorage.getItem(key);
		return data !== null ? JSON.parse(data) : initialValue;
	};

	const [storedData, setStoredData] = useState<T | null>(getLocalData);

	const setLocalData = (newValue: T | null) => {
		localStorage.setItem(key, JSON.stringify(newValue));
		setStoredData(newValue);
	};

	const deleteLocalData = (key: string) => {
		localStorage.removeItem(key);
		setStoredData(null);
	};

	return { storedData, setLocalData, deleteLocalData };
};

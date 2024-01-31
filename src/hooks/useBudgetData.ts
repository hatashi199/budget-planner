import { useState } from 'react';

interface BudgetDataInterface {
	name: string;
	budget: string;
}

export const useBudgetData = (
	key: string,
	initialValue?: BudgetDataInterface
) => {
	const getBudgetData = () => {
		const data = localStorage.getItem(key);
		return data !== null ? JSON.parse(data) : initialValue;
	};

	const [storedData, setStoredData] = useState(getBudgetData);

	const setBudgetData = (newValue: BudgetDataInterface) => {
		localStorage.setItem(key, JSON.stringify(newValue));
		setStoredData(newValue);
	};

	return [storedData, setBudgetData];
};

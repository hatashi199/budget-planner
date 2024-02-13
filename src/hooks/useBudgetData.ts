import { useState } from 'react';
import { BudgetDataInterface } from '../components/interfaces/BudgetDataInterface';

export const useBudgetData = (
	key: string,
	initialValue: BudgetDataInterface
) => {
	const getBudgetData = () => {
		const data = localStorage.getItem(key);
		return data !== null ? JSON.parse(data) : initialValue;
	};

	const [storedData, setStoredData] = useState<BudgetDataInterface | null>(
		getBudgetData
	);

	const setBudgetData = (newValue: BudgetDataInterface | null) => {
		localStorage.setItem(key, JSON.stringify(newValue));
		setStoredData(newValue);
	};

	const deleteBudgetData = (key: string) => {
		localStorage.removeItem(key);
		setStoredData(null);
	};

	return { storedData, setBudgetData, deleteBudgetData };
};

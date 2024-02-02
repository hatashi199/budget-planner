import { useState } from 'react';

interface BudgetDataInterface {
	name: string;
	budget: string;
}

export const useBudgetData = (
	key: string,
	initialValue?: BudgetDataInterface
): [BudgetDataInterface, (newValue: BudgetDataInterface) => void] => {
	const getBudgetData = () => {
		const data = localStorage.getItem(key);
		return data !== null ? JSON.parse(data) : initialValue;
	};

	const [storedData, setStoredData] =
		useState<BudgetDataInterface>(getBudgetData);

	const setBudgetData = (newValue: BudgetDataInterface) => {
		localStorage.setItem(key, JSON.stringify(newValue));
		setStoredData(newValue);
	};

	return [storedData, setBudgetData];
};
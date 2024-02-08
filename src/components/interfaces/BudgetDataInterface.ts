import { ExpensesListInterface } from './ExpensesListInterface';

export interface BudgetDataInterface {
	name: string;
	initialBudget: number;
	budget: number;
	expenses: ExpensesListInterface[] | [];
}

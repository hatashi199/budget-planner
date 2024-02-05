import { IconType } from 'react-icons';

export interface ExpensesListInterface {
	img: IconType;
	category: string;
	label: string;
	date: Date;
	expense: number;
}

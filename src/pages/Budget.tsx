import { useBudgetData } from '../hooks/useBudgetData';
import 'react-circular-progressbar/dist/styles.css';
import { ExpensesListInterface } from '../components/interfaces/ExpensesListInterface';
import ExpensesList from '../components/ExpensesList/ExpensesList';
import BudgetInfo from '../components/BudgetInfo/BudgetInfo';

const Budget: React.FC = () => {
	const [storedData] = useBudgetData('budgetData');

	// const expensesList: ExpensesListInterface[] = [
	// 	{
	// 		category: 'Transporte',
	// 		label: 'Coche',
	// 		date: new Date(),
	// 		expense: 3000
	// 	},
	// 	{
	// 		category: 'Comida',
	// 		label: 'Compra en el super',
	// 		date: new Date(),
	// 		expense: 50
	// 	}
	// ];

	return (
		<>
			{storedData ? (
				<div className='flex flex-col'>
					<BudgetInfo data={storedData} />
					<ExpensesList expensesData={storedData.expenses} />
				</div>
			) : (
				<div className='flex justify-center items-center bg-whiteD w-full h-[calc(100vh-80px)]'>
					<div className='flex flex-col items-center gap-[3rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[800px] w-full'>
						<h2 className='text-purpleD'>
							No se ha establecido ningún presupuesto
						</h2>
					</div>
				</div>
			)}
		</>
	);
};

export default Budget;

import { useBudgetData } from '../hooks/useBudgetData';
import 'react-circular-progressbar/dist/styles.css';
import ExpensesList from '../components/ExpensesList/ExpensesList';
import BudgetInfo from '../components/BudgetInfo/BudgetInfo';
import NewExpense from '../components/NewExpense/NewExpense';
import { Link } from 'react-router-dom';
import { BudgetDataInterface } from '../components/interfaces/BudgetDataInterface';

const Budget: React.FC = () => {
	const INIT_VALUE: BudgetDataInterface = {
		name: '',
		initialBudget: 0,
		budget: 0,
		expenses: []
	};

	const { storedData, setBudgetData, deleteBudgetData } = useBudgetData(
		'budgetData',
		INIT_VALUE
	);

	return (
		<>
			{storedData !== null ? (
				<div className='flex flex-col min-h-[calc(100vh-80px)]'>
					<BudgetInfo
						data={storedData}
						deleteData={deleteBudgetData}
					/>
					<ExpensesList expensesData={storedData.expenses} />
					<NewExpense
						data={storedData}
						updateData={setBudgetData}
					/>
				</div>
			) : (
				<div className='flex justify-center items-center bg-whiteD w-full min-h-[calc(100vh-80px)]'>
					<div className='flex flex-col items-center gap-[2rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
						<h2 className='text-purpleD'>
							No se ha establecido ningún presupuesto
						</h2>
						<Link
							to='/'
							className='bg-purpleD text-whiteD rounded-rad12 p-pad15 text-center'
						>
							Volver al Inicio
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default Budget;

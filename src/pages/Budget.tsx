import { useBudgetData } from '../hooks/useBudgetData';
import 'react-circular-progressbar/dist/styles.css';
import ExpensesList from '../components/ExpensesList/ExpensesList';
import BudgetInfo from '../components/BudgetInfo/BudgetInfo';
import NewExpense from '../components/NewExpense/NewExpense';

const Budget: React.FC = () => {
	const [storedData, setBudgetData] = useBudgetData('budgetData');

	return (
		<>
			{storedData ? (
				<div className='flex flex-col min-h-[calc(100vh-80px)]'>
					<BudgetInfo data={storedData} />
					<ExpensesList expensesData={storedData.expenses} />
					<NewExpense
						data={storedData}
						updateData={setBudgetData}
					/>
				</div>
			) : (
				<div className='flex justify-center items-center bg-whiteD w-full min-h-[calc(100vh-80px)]'>
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

import { useLocalStorageItems } from '../hooks/useBudgetData';
import 'react-circular-progressbar/dist/styles.css';
import ExpensesList from '../components/ExpensesList/ExpensesList';
import BudgetInfo from '../components/BudgetInfo/BudgetInfo';
import NewExpense from '../components/NewExpense/NewExpense';
import { Link } from 'react-router-dom';
import { INITIAL_LS_DATA } from '../const';
import { BudgetDataInterface } from '../components/interfaces/BudgetDataInterface';
import { PagePropsInterface } from '../components/interfaces/PagePropsInterface';

const Budget: React.FC<PagePropsInterface> = ({
	themeData
}: PagePropsInterface) => {
	const { storedData, setLocalData, deleteLocalData } =
		useLocalStorageItems<BudgetDataInterface>(
			'budgetData',
			INITIAL_LS_DATA
		);

	return (
		<>
			{storedData !== null ? (
				<div className='flex flex-col min-h-[calc(100vh-80px)]'>
					<BudgetInfo
						data={storedData}
						deleteData={deleteLocalData}
						themeData={themeData}
					/>
					<ExpensesList expensesData={storedData.expenses} />
					<NewExpense
						data={storedData}
						updateData={setLocalData}
					/>
				</div>
			) : (
				<div className='flex justify-center items-center bg-whiteD w-full min-h-[calc(100vh-80px)]'>
					<div className='flex flex-col items-center gap-[2rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
						<h2 className='text-purpleD dark:text-whiteD'>
							No se ha establecido ningún presupuesto
						</h2>
						<Link
							to='/'
							className='bg-purpleD dark:bg-whiteD text-whiteD dark:text-purpleD rounded-rad12 p-pad15 text-center'
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

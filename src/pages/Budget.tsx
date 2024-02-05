import { useBudgetData } from '../hooks/useBudgetData';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ExpensesListInterface } from '../components/ExpensesList/ExpensesListInterface';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import ExpensesList from '../components/ExpensesList/ExpensesList';

const Budget: React.FC = () => {
	const [storedData] = useBudgetData('budgetData');

	const expensesList: ExpensesListInterface[] = [
		{
			img: RiMoneyDollarCircleFill,
			category: 'Transporte',
			label: 'Coche',
			date: new Date(),
			expense: 3000
		},
		{
			img: RiMoneyDollarCircleFill,
			category: 'Comida',
			label: 'Compra en el super',
			date: new Date(),
			expense: 50
		}
	];

	return (
		<>
			{storedData ? (
				<div className='flex flex-col'>
					<div className='flex justify-center w-full py-pad68'>
						<div className='flex flex-col gap-[2.5rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[650px] w-full'>
							<div className='flex justify-between items-center gap-[3rem]'>
								<div className='w-[250px] h-[250px]'>
									<CircularProgressbar
										value={60}
										text={`60%`}
										strokeWidth={6}
										styles={buildStyles({
											pathColor: '#2c075e',
											trailColor: '#ddd7e5',
											textColor: '#2c075e',
											backgroundColor: 'transparent'
										})}
									/>
								</div>
								<div className='flex flex-col gap-[2.5rem] items-center'>
									<span className='text-purpleD text-[4rem]'>
										{storedData.budget}€
									</span>
									<div className='flex justify-between gap-[1.5rem] w-full'>
										<div className='flex flex-col items-center gap-[0.3rem]'>
											<span className='text-purpleD'>
												Gastos
											</span>
											<span className='text-purpleD text-[2rem]'>
												00,00€
											</span>
										</div>
										<div className='flex flex-col items-center gap-[0.3rem]'>
											<span className='text-purpleD'>
												Disponible
											</span>
											<span className='text-purpleD text-[2rem]'>
												00,00€
											</span>
										</div>
									</div>
								</div>
							</div>
							<button className='bg-purpleD text-whiteD rounded-rad12 py-pad15 text-center'>
								Reiniciar
							</button>
						</div>
					</div>
					<div className='flex justify-center w-full py-pad68'>
						<ExpensesList expensesData={expensesList} />
					</div>
				</div>
			) : (
				<div className='flex justify-center bg-whiteD w-full'>
					<div className='flex flex-col items-center gap-[3rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[800px] w-full'>
						<h2>No se ha establecido ningún presupuesto</h2>
					</div>
				</div>
			)}
		</>
	);
};

export default Budget;

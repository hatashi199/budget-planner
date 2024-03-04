import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { ExpensesListInterface } from '../interfaces/ExpensesListInterface';

interface ExpensesListProps {
	expensesData?: ExpensesListInterface[];
}

const ExpensesList: React.FC<ExpensesListProps> = ({
	expensesData
}: ExpensesListProps) => {
	return (
		<>
			{expensesData?.length !== 0 ? (
				<div className='flex justify-center w-full py-pad68'>
					<div className='flex flex-col gap-[2.5rem] max-w-[400px] sm:max-w-[1000px] w-full'>
						<h3 className='text-purpleD dark:text-whiteD text-[2rem] ml-mar24'>
							Gastos
						</h3>
						<div className='flex flex-col gap-[2rem]'>
							{expensesData?.map((expense) => {
								return (
									<div
										key={expense.id}
										className='flex flex-col sm:flex-row justify-between sm:items-center box-shadow-light dark:box-shadow-dark bg-whiteD dark:bg-purpleD box-shadow-1 rounded-rad12 p-pad24 mx-mar24'
									>
										<div className='flex flex-col items-center sm:flex-row sm:gap-[1rem] gap-[2rem] w-[100%]'>
											<div className='flex justify-center items-center bg-purpleL_Light dark:bg-purpleL_Dark rounded-[50%] w-[100px] h-[100px]'>
												<RiMoneyDollarCircleFill className='text-purpleD dark:text-whiteD text-[68px]' />
											</div>
											<div className='flex flex-1 flex-col gap-[2rem] sm:gap-0 sm:flex-row justify-between sm:items-center w-[100%]'>
												<div className='flex flex-col gap-[0.3rem] text-purpleD dark:text-whiteD'>
													<h4>{expense.category}</h4>
													<span>{expense.label}</span>
													<span>{expense.date}</span>
												</div>
												<span className='text-purpleD dark:text-whiteD text-[2rem] text-center'>
													{expense.expense}€
												</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				<div className='flex justify-center w-full py-pad68 '>
					<span className='text-purpleD dark:text-whiteD'>
						No has realizado ningún gasto
					</span>
				</div>
			)}
		</>
	);
};

export default ExpensesList;

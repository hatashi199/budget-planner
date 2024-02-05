import { ExpensesListInterface } from './ExpensesListInterface';

interface ExpensesListProps {
	expensesData?: ExpensesListInterface[];
}

const ExpensesList: React.FC<ExpensesListProps> = ({
	expensesData
}: ExpensesListProps) => {
	return (
		<>
			{expensesData ? (
				<div className='flex flex-col gap-[2.5rem] max-w-[1000px] w-full'>
					<h3 className='text-purpleD text-[2rem]'>Gastos</h3>
					<div className='flex flex-col gap-[2rem]'>
						{expensesData.map((expense) => {
							return (
								<div className='flex justify-between items-center bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24'>
									<div className='flex items-center gap-[1rem]'>
										<div className='flex justify-center items-center bg-purpleL_Light rounded-[50%] w-[100px] h-[100px]'>
											<expense.img className='text-purpleD text-[68px]' />
										</div>
										<div className='flex flex-col gap-[0.3rem] text-purpleD'>
											<h4>{expense.category}</h4>
											<span>{expense.label}</span>
											<span>
												{expense.date.toLocaleDateString(
													'es-ES',
													{
														weekday: 'long',
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													}
												)}
											</span>
										</div>
									</div>
									<span>{expense.expense}€</span>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<span>No has realizado ningún gasto</span>
			)}
		</>
	);
};

export default ExpensesList;

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import InputText from '../InputText/InputText';
import { BudgetDataInterface } from '../interfaces/BudgetDataInterface';
import { v4 as uuidv4 } from 'uuid';
import { ExpensesListInterface } from '../interfaces/ExpensesListInterface';

interface NewExpenseProps {
	data: BudgetDataInterface;
	updateData: (newValue: BudgetDataInterface) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({
	data,
	updateData
}: NewExpenseProps) => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [category, setCategory] = useState<string>('');
	const [expense, setExpense] = useState<number>(0);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const nowDate: Date = new Date();

		const newExpense: ExpensesListInterface[] | [] = [
			...data.expenses,
			{
				id: uuidv4(),
				category,
				label: name,
				date: nowDate.toLocaleDateString('es-ES', {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				}),
				expense
			}
		];

		updateData({
			...data,
			budget: data.budget - expense,
			expenses: newExpense
		});

		setName('');
		setCategory('');
		setExpense(0);
	};
	return (
		<>
			<button
				className='flex justify-center items-center fixed bottom-[5%] right-[3%] z-5 cursor-pointer bg-purpleD rounded-[50%] w-[65px] h-[65px]'
				onClick={() => setOpenModal(true)}
			>
				<FaPlus className='text-whiteD text-[28px]' />
			</button>
			{openModal && (
				<div className='flex justify-center items-center bg-purpleD bg-opacity-85 w-[100vw] h-[100vh] fixed top-0 z-10'>
					<div
						className='flex justify-center items-center absolute top-[5%] right-[3%] cursor-pointer'
						onClick={() => setOpenModal(false)}
					>
						<RxCross2 className='text-whiteD text-[28px]' />
					</div>
					<div className='flex flex-col items-center gap-[3rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
						<div className='flex flex-col items-center gap-[0.5rem] w-full'>
							<h3 className='text-purpleD text-[2.5rem] uppercase'>
								Nuevo Gasto
							</h3>
							<div className='bg-purpleD h-[3px] w-full'></div>
						</div>
						<form className='flex flex-col gap-[2.5rem] w-full'>
							<InputText
								value={name}
								changeEvent={(e) => setName(e.target.value)}
								label='Nombre'
								placeholder='Introduce el nombre del gasto'
							/>
							<InputText
								value={category}
								changeEvent={(e) => setCategory(e.target.value)}
								label='Categoría'
								placeholder='Introduce una categoría'
							/>
							<InputText
								value={expense === 0 ? '' : expense.toString()}
								changeEvent={(e) =>
									setExpense(Number(e.target.value))
								}
								label='Gasto'
								placeholder='Introduce el  total del gasto'
							/>
							<button
								className='bg-purpleD text-whiteD rounded-rad12 py-pad15 text-center'
								onClick={handleClick}
							>
								Aceptar
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default NewExpense;

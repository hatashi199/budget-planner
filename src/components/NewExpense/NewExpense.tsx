import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import InputText from '../InputText/InputText';
import { BudgetDataInterface } from '../interfaces/BudgetDataInterface';
import { v4 as uuidv4 } from 'uuid';
import { ExpensesListInterface } from '../interfaces/ExpensesListInterface';
import { ErrorAddExpense } from '../interfaces/ErrorAddExpense';

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
	const [expense, setExpense] = useState<number | ''>('');
	const [errorAddExpense, setErrorAddExpense] = useState<ErrorAddExpense>({
		errorName: '',
		errorCategory: '',
		errorExpense: ''
	});

	const handleExpenseValidation = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (!isNaN(Number(e.target.value))) {
			setExpense(Number(e.target.value));
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!name || !category || !expense) {
			setErrorAddExpense({
				errorName: !name ? 'Nombre obligatorio' : '',
				errorCategory: !category ? 'Categoría obligatoria' : '',
				errorExpense: !expense ? 'Gasto obligatorio' : ''
			});
			return;
		}

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
		setExpense('');
		setOpenModal(false);
	};
	return (
		<>
			<button
				className='flex justify-center items-center fixed bottom-[5%] right-[3%] z-5 cursor-pointer bg-purpleD dark:bg-whiteD rounded-[50%] w-[65px] h-[65px]'
				onClick={() => setOpenModal(true)}
			>
				<FaPlus className='text-whiteD dark:text-purpleD text-[28px]' />
			</button>
			{openModal && (
				<div className='flex justify-center items-center bg-purpleD bg-opacity-85 w-[100vw] h-[100vh] fixed top-0 z-10'>
					<div
						className='flex justify-center items-center absolute top-[5%] right-[3%] cursor-pointer'
						onClick={() => setOpenModal(false)}
					>
						<RxCross2 className='text-whiteD text-[28px]' />
					</div>
					<div className='flex flex-col items-center gap-[3rem] bg-whiteD dark:bg-purpleD box-shadow-light dark:box-shadow-dark box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
						<div className='flex flex-col items-center gap-[0.5rem] w-full'>
							<h3 className='text-purpleD dark:text-whiteD text-[2.5rem] uppercase'>
								Nuevo Gasto
							</h3>
							<div className='bg-purpleD dark:bg-whiteD h-[3px] w-full'></div>
						</div>
						<form className='flex flex-col gap-[2.5rem] w-full text-[1.2rem]'>
							<InputText
								value={name}
								changeEvent={(e) => setName(e.target.value)}
								label='Nombre'
								placeholder='Introduce el nombre del gasto'
								error={errorAddExpense.errorName}
							/>
							<InputText
								value={category}
								changeEvent={(e) => setCategory(e.target.value)}
								label='Categoría'
								placeholder='Introduce una categoría'
								error={errorAddExpense.errorCategory}
							/>
							<InputText
								value={expense.toString()}
								changeEvent={handleExpenseValidation}
								label='Gasto'
								placeholder='Introduce el  total del gasto'
								error={errorAddExpense.errorExpense}
							/>
							<button
								className='bg-purpleD dark:bg-whiteD text-whiteD dark:text-purpleD rounded-rad12 py-pad15 text-center'
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

import { useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useBudgetData } from '../hooks/useBudgetData';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/InputText/InputText';
import { BudgetDataInterface } from '../components/interfaces/BudgetDataInterface';

const Home: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [budget, setBudget] = useState<number>(0);
	const [errorName, setErrorName] = useState<string>('');
	const [errorBudget, setErrorBudget] = useState<string>('');

	const { storedData, setBudgetData } = useBudgetData('budgetData', {
		name,
		initialBudget: 0,
		budget,
		expenses: []
	});

	const navigate = useNavigate();

	const handleBudgetValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isNaN(Number(e.target.value))) {
			setBudget(Number(e.target.value));
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!name || !budget) {
			setErrorName(!name ? 'Nombre obligatorio' : '');
			setErrorBudget(!budget ? 'Presupuesto obligatorio' : '');
			return;
		}

		setErrorName('');
		setErrorBudget('');

		const updateBudgetData: BudgetDataInterface | null =
			storedData != null
				? {
						...storedData,
						name,
						initialBudget: budget,
						budget
					}
				: null;

		setBudgetData(updateBudgetData);

		navigate('/budget');
		setName('');
		setBudget(0);
	};

	return (
		<div className='flex justify-center items-center bg-whiteD w-full min-h-[calc(100vh-80px)]'>
			<div className='flex flex-col items-center gap-[3rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
				<div className='flex justify-center items-center rounded-[50%] bg-purpleL_Light w-[96px] h-[96px]'>
					<FaMoneyBillWave className='text-purpleD text-[36px]' />
				</div>
				<form className='flex flex-col gap-[2.5rem] w-full'>
					<InputText
						label='Nombre'
						placeholder='Introduce tu nombre'
						value={name}
						changeEvent={(e) => setName(e.target.value)}
						error={errorName}
					/>
					<InputText
						label='Presupuesto'
						placeholder='Introduce tu presupuesto'
						value={budget === 0 ? '' : budget.toString()}
						changeEvent={handleBudgetValidation}
						error={errorBudget}
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
	);
};

export default Home;

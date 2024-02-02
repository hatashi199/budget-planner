import { useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useBudgetData } from '../hooks/useBudgetData';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/InputText/InputText';

const Home: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [budget, setBudget] = useState<string>('');
	const [errorName, setErrorName] = useState<string>('');
	const [errorBudget, setErrorBudget] = useState<string>('');

	const [storedData, setBudgetData] = useBudgetData('budgetData', {
		name,
		budget
	});

	const navigate = useNavigate();

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!name || !budget) {
			setErrorName(!name ? 'Nombre obligatorio' : '');
			setErrorBudget(!budget ? 'Presupuesto obligatorio' : '');
			return;
		}

		setErrorName('');
		setErrorBudget('');

		setBudgetData({
			name,
			budget
		});

		navigate('/budget');
		setName('');
		setBudget('');
	};

	return (
		<div className='flex justify-center items-center w-full h-[calc(100vh-80px)]'>
			<div className='flex flex-col items-center gap-[3rem] box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
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
						value={budget}
						changeEvent={(e) => setBudget(e.target.value)}
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
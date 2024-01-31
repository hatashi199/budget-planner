import { useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useBudgetData } from '../hooks/useBudgetData';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [budget, setBudget] = useState<string>('');

	const [storedData, setBudgetData] = useBudgetData('budgetData', {
		name,
		budget
	});

	const handleClick = () => {
		setBudgetData({
			name,
			budget
		});
		setName('');
		setBudget('');
	};

	return (
		<div className='flex justify-center items-center w-full h-[calc(100vh-80px)]'>
			<div className='flex flex-col items-center gap-[3rem] box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[450px] w-full'>
				<div className='flex justify-center items-center rounded-[50%] bg-purpleL_Light w-[96px] h-[96px]'>
					<FaMoneyBillWave className='text-purpleD text-[36px]' />
				</div>
				<form className='flex flex-col gap-[2rem] w-full'>
					<label className='border-solid border-[1px] border-purpleD rounded-rad12 relative py-pad15 pl-pad15'>
						<span className='absolute top-[-8px] text-purpleD bg-whiteD px-[5px]'>
							Nombre
						</span>
						<input
							type='text'
							placeholder='Introduce tu nombre'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label className='border-solid border-[1px] border-purpleD rounded-rad12 relative py-pad15 pl-pad15'>
						<span className='absolute top-[-8px] text-purpleD bg-whiteD px-[5px]'>
							Presupuesto
						</span>
						<input
							type='text'
							placeholder='Introduce tu presupuesto'
							value={budget}
							onChange={(e) => setBudget(e.target.value)}
						/>
					</label>
					<Link
						to='budget'
						className='bg-purpleD text-whiteD rounded-rad12 py-pad15 text-center'
						onClick={handleClick}
					>
						Aceptar
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Home;

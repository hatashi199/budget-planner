import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BudgetDataInterface } from '../interfaces/BudgetDataInterface';
import React from 'react';

interface BudgetInfoProps {
	data: BudgetDataInterface;
	deleteData: (key: string) => void;
}

const BudgetInfo: React.FC<BudgetInfoProps> = ({
	data,
	deleteData
}: BudgetInfoProps) => {
	const remainingBudget: number =
		100 - (data.budget * 100) / data.initialBudget;

	const handleClick = () => {
		deleteData('budgetData');
	};

	return (
		<div className='flex justify-center w-full py-pad68'>
			<div className='flex flex-col gap-[2.5rem] bg-whiteD box-shadow-1 rounded-rad12 p-pad24 mx-mar24 max-w-[650px] w-full'>
				<div className='flex justify-between items-center gap-[3rem]'>
					<div className='w-[250px] h-[250px]'>
						<CircularProgressbar
							value={Math.round(remainingBudget)}
							text={`${Math.round(remainingBudget)}%`}
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
							{data.initialBudget}€
						</span>
						<div className='flex justify-between gap-[1.5rem] w-full'>
							<div className='flex flex-col items-center gap-[0.3rem]'>
								<span className='text-purpleD'>Gastos</span>
								<span className='text-purpleD text-[2rem]'>
									{data.initialBudget === data.budget
										? '0.00'
										: data.initialBudget - data.budget}
									€
								</span>
							</div>
							<div className='flex flex-col items-center gap-[0.3rem]'>
								<span className='text-purpleD'>Disponible</span>
								<span className='text-purpleD text-[2rem]'>
									{data.budget}€
								</span>
							</div>
						</div>
					</div>
				</div>
				<button
					className='bg-purpleD text-whiteD rounded-rad12 py-pad15 text-center'
					onClick={handleClick}
				>
					Reiniciar
				</button>
			</div>
		</div>
	);
};

export default BudgetInfo;

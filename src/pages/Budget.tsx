import { useBudgetData } from '../hooks/useBudgetData';

const Budget: React.FC = () => {
	const [storedData] = useBudgetData('budgetData');
	return (
		<>
			{storedData ? (
				<>
					<h3>Hola soy {storedData.name}</h3>
					<h3>Tengo {storedData.budget}</h3>
				</>
			) : (
				<h3>Nada</h3>
			)}
		</>
	);
};

export default Budget;

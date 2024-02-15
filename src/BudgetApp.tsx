import { Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from './routes';
import Header from './components/Header/Header';
import { useLocalStorageItems } from './hooks/useBudgetData';
import { INITIAL_LS_DATA } from './const';
import { useEffect } from 'react';
import { BudgetDataInterface } from './components/interfaces/BudgetDataInterface';

const BudgetApp: React.FC = () => {
	const budgetData = useLocalStorageItems<BudgetDataInterface>(
		'budgetData',
		INITIAL_LS_DATA
	);
	const themeData = useLocalStorageItems<string>('theme', 'light');
	const navigate = useNavigate();

	useEffect(() => {
		if (budgetData.storedData !== INITIAL_LS_DATA) {
			navigate('/budget');
		} else {
			navigate('/');
		}
	}, []);

	return (
		<div
			className={
				themeData.storedData !== 'light'
					? `dark bg-purpleD`
					: 'bg-whiteD'
			}
		>
			<Header changeTheme={themeData} />
			<Routes>
				{routes.map((route) => (
					<Route
						path={route.path}
						element={<route.page />}
						key={route.label}
					/>
				))}
			</Routes>
		</div>
	);
};

export default BudgetApp;

import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Header from './components/Header/Header';

const BudgetApp: React.FC = () => {
	return (
		<>
			<Header />
			<Routes>
				{routes.map((route) => (
					<Route
						path={route.path}
						element={<route.page />}
						key={route.label}
					/>
				))}
			</Routes>
		</>
	);
};

export default BudgetApp;

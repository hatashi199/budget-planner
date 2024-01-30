import Budget from './pages/Budget';
import Home from './pages/Home';

interface RouteInterface {
	path: string;
	page: React.FC;
	label: string;
}

export const routes: RouteInterface[] = [
	{
		path: '/',
		page: Home,
		label: 'Inicio'
	},
	{
		path: '/budget',
		page: Budget,
		label: 'Monedero'
	}
];

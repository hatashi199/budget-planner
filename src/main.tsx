import React from 'react';
import ReactDOM from 'react-dom/client';
import BudgetApp from './BudgetApp.tsx';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<BudgetApp />
		</BrowserRouter>
	</React.StrictMode>
);

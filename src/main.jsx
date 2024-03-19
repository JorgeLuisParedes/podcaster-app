import React from 'react';
import ReactDOM from 'react-dom/client';

import { PodcasterApp } from './PodcasterApp.jsx';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<PodcasterApp />
		</BrowserRouter>
	</React.StrictMode>
);

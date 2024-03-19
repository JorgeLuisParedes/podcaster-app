import React from 'react';
import ReactDOM from 'react-dom/client';

import { PodcasterApp } from './PodcasterApp.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PodcasterApp />
	</React.StrictMode>
);

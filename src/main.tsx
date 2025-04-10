import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@src/App.tsx';
import '@src/index.css';
import { Provider } from 'react-redux';
import store from '@src/store/store';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);

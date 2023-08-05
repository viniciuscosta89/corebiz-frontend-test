import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme.ts';
import { GlobalStyle } from './styles/GlobalStyle';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</ShoppingCartProvider>
	</React.StrictMode>
);

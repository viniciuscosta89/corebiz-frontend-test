import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CustomThemeProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<CustomThemeProvider>
				<GlobalStyle />
				<App />
			</CustomThemeProvider>
		</ShoppingCartProvider>
	</React.StrictMode>
);

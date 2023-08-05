import { ReactNode, createContext, useEffect, useState } from 'react';

interface ShoppingCartProviderType {
	children: ReactNode;
}

interface ShoppingCartContextData {
	shoppingCartItems: number;
	handleShoppingCartItems(): void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
	const items = JSON.parse(localStorage.getItem('shoppingCartItems')!);

	const [shoppingCartItems, setShoppingCartItemsInfo] = useState(items || 0);

	function handleShoppingCartItems() {
		setShoppingCartItemsInfo((prev: number) => ++prev);
		localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
	}

	useEffect(() => {
		localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
	}, [shoppingCartItems]);

	return (
		<ShoppingCartContext.Provider value={{ shoppingCartItems, handleShoppingCartItems }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}

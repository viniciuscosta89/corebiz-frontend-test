import { lazy } from 'react';
const HeaderAccount = lazy(() => import('./HeaderAccount'));
const HeaderGrid = lazy(() => import('./HeaderGrid'));
const HeaderRoot = lazy(() => import('./HeaderRoot'));
const HeaderSearchBar = lazy(() => import('./HeaderSearchBar'));
const HeaderShoppingCart = lazy(() => import('./HeaderShoppingCart'));

const Header = {
	Root: HeaderRoot,
	Account: HeaderAccount,
	Grid: HeaderGrid,
	SearchBar: HeaderSearchBar,
	ShoppingCart: HeaderShoppingCart,
};

export default Header;

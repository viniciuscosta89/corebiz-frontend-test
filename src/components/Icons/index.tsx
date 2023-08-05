import { lazy } from 'react';

const IconCreatedBy = lazy(() => import('./IconCreatedBy'));
const IconLoading = lazy(() => import('./IconLoading'));
const IconLogo = lazy(() => import('./IconLogo'));
const IconMail = lazy(() => import('./IconMail'));
const IconPhone = lazy(() => import('./IconPhone'));
const IconPoweredBy = lazy(() => import('./IconPoweredBy'));
const IconSearch = lazy(() => import('./IconSearch'));
const IconShoppingCart = lazy(() => import('./IconShoppingCart'));
const IconUser = lazy(() => import('./IconUser'));

const Icons = {
	CreatedBy: IconCreatedBy,
	Loading: IconLoading,
	Logo: IconLogo,
	Mail: IconMail,
	Phone: IconPhone,
	PoweredBy: IconPoweredBy,
	Search: IconSearch,
	ShoppingCart: IconShoppingCart,
	User: IconUser,
};

export default Icons;

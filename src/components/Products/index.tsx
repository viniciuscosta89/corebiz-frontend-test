import { lazy } from 'react';
import ProductsContent from './ProductsContent';
const ProductsImage = lazy(() => import('./ProductsImage'));
const ProductsInstallments = lazy(() => import('./ProductsInstallments'));
const ProductsItem = lazy(() => import('./ProductsItem'));
const ProductsListPrice = lazy(() => import('./ProductsListPrice'));
const ProductsName = lazy(() => import('./ProductsName'));
const ProductsPrice = lazy(() => import('./ProductsPrice'));
const ProductsPricesContainer = lazy(() => import('./ProductsPricesContainer'));
const ProductsRating = lazy(() => import('./ProductsRating'));
const ProductsRoot = lazy(() => import('./ProductsRoot'));
const ProductsTag = lazy(() => import('./ProductsTag'));
const ProductsTitle = lazy(() => import('./ProductsTitle'));

const Products = {
	Root: ProductsRoot,
	Content: ProductsContent,
	Image: ProductsImage,
	Installments: ProductsInstallments,
	Item: ProductsItem,
	ListPrice: ProductsListPrice,
	Name: ProductsName,
	Price: ProductsPrice,
	PricesContainer: ProductsPricesContainer,
	Rating: ProductsRating,
	Tag: ProductsTag,
	Title: ProductsTitle,
};

export default Products;

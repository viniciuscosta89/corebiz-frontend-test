import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type ProductsList = Product[];

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

const fetchProducts = async (): Promise<ProductsList> =>
	await axios.get('https://fakestoreapi.com/products').then((response) => response.data);

export const useProducts = () => {
	const { data, isLoading, isSuccess } = useQuery(['products'], fetchProducts);

	return { data, isLoading, isSuccess };
};

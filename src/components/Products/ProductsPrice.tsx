import styled from 'styled-components';

interface ProductsPriceProps {
	price: number;
}

const ProductsPriceStyle = styled.strong`
	color: ${({ theme }) => theme.colors.black[900]};
	font-size: var(--fs-400);
	font-weight: var(--fw-bold);
	margin-block-end: 0.25rem;

	@media (min-width: 1140px) {
		font-size: var(--fs-500);
	}
`;

function ProductsPrice({ price }: ProductsPriceProps) {
	// const priceString = String(price);
	// const formattedPrice = Number(
	// 	priceString.substring(0, priceString.length - 2) + '.' + priceString.substring(priceString.length - 2)
	// );

	return (
		<ProductsPriceStyle>
			por {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
		</ProductsPriceStyle>
	);
}

export default ProductsPrice;

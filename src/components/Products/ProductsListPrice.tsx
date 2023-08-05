import styled from 'styled-components';

interface ProductsListPriceProps {
	price: number;
}

const ProductsListPriceStyle = styled.span`
	color: ${({ theme }) => theme.colors.black[600]};
	font-size: var(--fs-100);
	font-weight: var(--fw-regular);
	line-height: 1;
	position: absolute;
	top: -0.625rem;
	transform: translateX(48%);
	text-decoration: line-through;
`;

function ProductsListPrice({ price }: ProductsListPriceProps) {
	// const priceString = String(price);
	// const formattedPrice = Number(
	// 	priceString.substring(0, priceString.length - 2) + '.' + priceString.substring(priceString.length - 2)
	// );

	return (
		<ProductsListPriceStyle>
			de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
		</ProductsListPriceStyle>
	);
}

export default ProductsListPrice;

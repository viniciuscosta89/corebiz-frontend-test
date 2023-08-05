import styled from 'styled-components';

interface ProductsInstallmentsProps {
	quantity: number;
	value: number;
}

const ProductsInstallmentsStyle = styled.span`
	color: ${({ theme }) => theme.colors.black[600]};
	font-size: var(--fs-100);
	font-weight: var(--fw-regular);
	margin-block-end: 0.25rem;
`;

function ProductsInstallments({ quantity, value }: ProductsInstallmentsProps) {
	// const priceString = String(value);
	// const formattedPrice = Number(
	// 	priceString.substring(0, priceString.length - 2) + '.' + priceString.substring(priceString.length - 2)
	// );

	return (
		<ProductsInstallmentsStyle>
			ou em ${quantity}x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}
		</ProductsInstallmentsStyle>
	);
}

export default ProductsInstallments;

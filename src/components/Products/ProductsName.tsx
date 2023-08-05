import styled from 'styled-components';

interface ProductsNameProps {
	text: string;
}

const ProductsNameStyle = styled.h3`
	color: ${({ theme }) => theme.colors.black[600]};
	display: -webkit-box;
	font-size: var(--fs-50);
	font-weight: var(--fw-semibold);
	line-height: normal;
	margin-block-end: 0.75rem;
	height: 1.75rem;
	overflow: hidden;
	text-overflow: ellipsis;
	text-transform: uppercase;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	@media (min-width: 1140px) {
		font-size: var(--fs-200);
	}
`;

function ProductsName({ text }: ProductsNameProps) {
	return <ProductsNameStyle title={text}>{text}</ProductsNameStyle>;
}

export default ProductsName;

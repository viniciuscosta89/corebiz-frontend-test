import styled from 'styled-components';

interface ProductsTagProps {
	text: string;
}

const ProductsTagStyle = styled.span`
	background-image: url('/src/assets/polygon.svg');
	background-repeat: no-repeat;
	background-position: top right;
	color: ${({ theme }) => theme.colors.white};
	font-size: var(--fs-50);
	font-weight: var(--fw-semibold);
	display: flex;
	justify-content: flex-end;
	padding: 0.47rem 0.31rem;
	position: absolute;
	top: 0;
	right: 0;
	width: 3.15rem;
	height: 2.7835rem;
`;

function ProductsTag({ text }: ProductsTagProps) {
	return <ProductsTagStyle>{text}</ProductsTagStyle>;
}

export default ProductsTag;

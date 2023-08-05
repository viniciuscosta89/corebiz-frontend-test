import styled from 'styled-components';

interface ProductsTitleProps {
	text: string;
}

const ProductsTitleStyle = styled.h2`
	color: ${({ theme }) => theme.colors.black[900]};
	font-size: var(--fs-500);
	font-weight: var(--fw-black);
	display: flex;
	flex-direction: column;
	line-height: normal;
	margin-block-end: 1rem;
	gap: 0.25rem;
	position: relative;

	@media (min-width: 1140px) {
		font-size: var(--fs-600);
	}

	&::after {
		content: '';
		background-color: ${({ theme }) => theme.colors.black[300]};
		display: block;
		position: relative;
		height: 0.21888rem;
		width: 2.03125rem;
	}
`;

function ProductsTitle({ text }: ProductsTitleProps) {
	return <ProductsTitleStyle>{text}</ProductsTitleStyle>;
}

export default ProductsTitle;

import styled from 'styled-components';

const ProductsContent = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	display: grid;
	padding: 0.45rem 0 0;
	text-align: center;
	transition: all 0.3s ease-in-out;

	@media (min-width: 1140px) {
		padding: 0.45rem 2.8rem 1rem;
	}
`;

export default ProductsContent;

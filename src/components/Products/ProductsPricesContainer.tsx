import { ReactNode } from 'react';
import styled from 'styled-components';

interface ProductsPricesContainerProps {
	children: ReactNode;
}

const ProductsPricesContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

function ProductsPricesContainer({ children }: ProductsPricesContainerProps) {
	return <ProductsPricesContainerStyle>{children}</ProductsPricesContainerStyle>;
}

export default ProductsPricesContainer;

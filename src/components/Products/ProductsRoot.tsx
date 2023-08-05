import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ProductsRootProps {
	children: ReactNode;
}

const ProductsRootStyle = styled(motion.section)`
	background-color: ${({ theme }) => theme.colors.white};
	padding-block: 1rem 2.5rem;
`;

function ProductsRoot({ children }: ProductsRootProps) {
	return <ProductsRootStyle id="best-sellers">{children}</ProductsRootStyle>;
}

export default ProductsRoot;

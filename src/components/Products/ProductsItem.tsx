import { ReactNode } from 'react';
import styled from 'styled-components';
import ProductsContent from './ProductsContent';
import { motion, Variants } from 'framer-motion';

interface ProductsItemProps {
	children: ReactNode;
}

const ProductsItemStyle = styled(motion.article)`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
	text-align: center;

	&:hover {
		${ProductsContent} {
			background-color: ${({ theme }) => theme.colors.black[200]};
		}
	}
`;

const itemVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -150,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

function ProductsItem({ children }: ProductsItemProps) {
	return <ProductsItemStyle variants={itemVariants}>{children}</ProductsItemStyle>;
}

ProductsItem.Bottom = ({ children }: ProductsItemProps) => <ProductsContent>{children}</ProductsContent>;

export default ProductsItem;

import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Icons from '../Icons';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const ShoppingCartIconContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	justify-self: flex-end;

	@media (min-width: 1140px) {
		order: 3;
	}
`;

const ShoppingCartCounter = styled(motion.span)`
	aspect-ratio: 1;
	background-color: ${({ theme }) => theme.colors.accent};
	border-radius: 50%;
	color: ${({ theme }) => theme.colors.white};
	display: grid;
	font-size: var(--fs-100);
	font-weight: var(--fw-semibold);
	line-height: 1;
	padding: 0.125rem;
	place-items: center;
	min-width: 0.875rem;
	min-height: 0.875rem;
`;

function HeaderShoppingCart() {
	const { shoppingCartItems } = useContext(ShoppingCartContext);

	return (
		<ShoppingCartIconContainer>
			<Icons.ShoppingCart />
			<AnimatePresence mode="wait">
				<ShoppingCartCounter>
					<motion.span
						key={shoppingCartItems}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeIn', duration: 0.3 }}
					>
						{shoppingCartItems}
					</motion.span>
				</ShoppingCartCounter>
			</AnimatePresence>
		</ShoppingCartIconContainer>
	);
}

export default HeaderShoppingCart;

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	max-width: 1248px;
	margin-inline: auto;
	width: min(58rem, 100% - 2rem);

	@media (min-width: 1140px) {
		width: min(78rem, 100% - 2rem);
	}
`;

export default Container;

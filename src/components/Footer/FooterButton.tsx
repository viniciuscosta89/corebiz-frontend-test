import styled from 'styled-components';
import Button from '../Button';

const FooterButton = styled(Button)`
	display: grid;
	grid-template-columns: auto 1fr;
	place-items: center;

	@media (min-width: 360px) and (max-width: 1139px) {
		grid-template-columns: 1rem 8rem;
	}

	> svg {
		min-width: 1rem;
	}
`;

export default FooterButton;

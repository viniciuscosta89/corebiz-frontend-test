import styled from 'styled-components';

const FooterGrid = styled.div`
	display: grid;
	align-items: center;

	@media (min-width: 1140px) {
		grid-template-columns: 1fr auto 1fr;
	}
`;

export default FooterGrid;

import styled from 'styled-components';

const FooterButtons = styled.div`
	display: grid;
	gap: 1.6rem;
	padding-inline: 2.8rem;

	@media (min-width: 1140px) {
		grid-template-rows: repeat(2, 2.375rem);
		max-width: 12.1875rem;
		padding-inline: 0;
	}

	button {
		line-height: 1;
	}
`;

export default FooterButtons;

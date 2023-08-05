import styled from 'styled-components';

const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-block-start: 1.5rem;
	padding-inline: 2rem;

	@media (min-width: 1140px) {
		gap: 1.5rem;
		justify-content: flex-end;
	}
`;

export default FooterBottom;

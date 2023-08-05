import styled from 'styled-components';

const FooterRoot = styled.footer`
	background-color: ${({ theme }) => theme.colors.black[900]};
	padding: 1.75rem 0 1rem;
	position: relative;

	@media (min-width: 1140px) {
		padding-block: 1.5rem 1.75rem;
	}
`;

export default FooterRoot;

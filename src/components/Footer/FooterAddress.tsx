import styled from 'styled-components';

const FooterAddress = styled.address`
	font-size: var(--fs-300);
	font-weight: var(--fw-regular);
	display: flex;
	flex-direction: column;
	line-height: normal;
	margin-block-end: 2rem;
	gap: 0.5rem;
	position: relative;

	@media (min-width: 1140px) {
		margin-block-end: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
		transition: all 0.3s ease-in-out;

		&:hover,
		&:focus {
			color: ${({ theme }) => theme.colors.accent};
		}
	}
`;

export default FooterAddress;

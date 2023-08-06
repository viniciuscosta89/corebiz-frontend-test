import styled from 'styled-components';

const FooterTitle = styled.h2`
	font-size: var(--fs-500);
	font-weight: var(--fw-bold);
	display: flex;
	flex-direction: column;
	line-height: normal;
	margin-block-end: 1rem;
	gap: 0.25rem;
	position: relative;

	&::after {
		content: '';
		background-color: ${({ theme }) => theme.colors['always-white']};
		display: block;
		position: relative;
		height: 0.25rem;
		width: 2rem;
	}
`;

export default FooterTitle;

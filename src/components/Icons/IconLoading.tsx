import styled from 'styled-components';

const IconLoadingContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	font-size: var(--fs-600);
	font-weight: var(--fw-black);
`;

const IconLoadingStyle = styled.div`
	display: inline-block;
	position: relative;
	width: 4rem;
	height: 4rem;

	& div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 3rem;
		height: 3rem;
		margin: 8px;
		border: 8px solid ${({ theme }) => theme.colors.accent};
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${({ theme }) => theme.colors.accent} transparent transparent transparent;

		&:nth-child(1) {
			animation-delay: -0.45s;
		}

		&:nth-child(2) {
			animation-delay: -0.3s;
		}

		&:nth-child(3) {
			animation-delay: -0.15s;
		}
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

function IconLoading() {
	return (
		<IconLoadingContainer>
			<IconLoadingStyle>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</IconLoadingStyle>
			<span>Loading...</span>
		</IconLoadingContainer>
	);
}

export default IconLoading;

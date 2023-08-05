import Icons from '../Icons';
import styled from 'styled-components';

const HeaderAccountStyle = styled.div`
	display: none;
	align-items: center;
	gap: 0.3rem;
	font-size: var(--fs-300);

	@media (min-width: 1140px) {
		display: flex;
		margin-inline-end: 1.3rem;
		order: 2;
	}
`;

function HeaderAccount() {
	return (
		<HeaderAccountStyle>
			<Icons.User />
			<span>Minha Conta</span>
		</HeaderAccountStyle>
	);
}

export default HeaderAccount;

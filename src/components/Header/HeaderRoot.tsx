import { ReactNode } from 'react';
import styled from 'styled-components';

interface HeaderRootProps {
	children: ReactNode;
}

const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.colors.white};
	position: sticky;
	top: 0;
	z-index: 10;
`;

function HeaderRoot({ children }: HeaderRootProps) {
	return <HeaderStyle>{children}</HeaderStyle>;
}

export default HeaderRoot;

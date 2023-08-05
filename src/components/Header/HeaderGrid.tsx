import { ReactNode } from 'react';
import styled from 'styled-components';

interface HeaderGridProps {
	children: ReactNode;
}

const HeaderGridStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;
	align-items: center;
	padding-block: 0.5rem;

	@media (min-width: 1140px) {
		grid-template-columns: 11.3125rem 1fr auto auto;
		padding-block: 1rem;
	}
`;

function HeaderGrid({ children }: HeaderGridProps) {
	return <HeaderGridStyle>{children}</HeaderGridStyle>;
}

export default HeaderGrid;

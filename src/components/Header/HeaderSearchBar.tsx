import styled from 'styled-components';
import Icons from '../Icons';

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	grid-column: span 3;
	margin-block-start: 1rem;

	@media (min-width: 1140px) {
		grid-column: auto;
		margin-block-start: 0;
		margin-inline: 7.5rem 2.7rem;
		order: 1;
	}
`;

const SearchBarInput = styled.input`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.black[600]};
	padding: 0.25rem 0;
	width: 100%;

	&::placeholder {
		color: ${({ theme }) => theme.colors.black[600]};
		font-size: var(--fs-300);
	}
`;

const SearchIconStyle = styled.span`
	position: absolute;
	right: 0;
`;

function HeaderSearchBar() {
	return (
		<SearchBar>
			<SearchBarInput placeholder="O que está procurando?" />
			<SearchIconStyle>
				<Icons.Search />
			</SearchIconStyle>
		</SearchBar>
	);
}

export default HeaderSearchBar;

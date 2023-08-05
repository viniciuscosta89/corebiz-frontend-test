import styled from 'styled-components';

interface MobileMenuItemProps {
	onClick: () => void;
	url: string;
	label: string;
}

const MobileMenuItemStyle = styled.a`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	font-size: var(--fs-600);
	text-decoration: none;
`;

function MobileMenuItem({ label, url, onClick }: MobileMenuItemProps) {
	return (
		<MobileMenuItemStyle href={url} onClick={onClick}>
			{label}
		</MobileMenuItemStyle>
	);
}

export default MobileMenuItem;

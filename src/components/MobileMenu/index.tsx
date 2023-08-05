import { lazy } from 'react';
import styled from 'styled-components';
const MobileMenuItem = lazy(() => import('./MobileMenuItem'));
import { useState } from 'react';

interface MobileMenuProps {
	items: MobileMenuItems[];
}

interface MobileMenuItems {
	url: string;
	label: string;
}

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	border: none;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
	padding: 0;
	position: relative;
	z-index: 25;
	width: 2.5rem;
	height: 2.5rem;
	transform: translateX(-0.5rem);
	transition: all 0.3s ease-in-out;

	@media (min-width: 1140px) {
		display: none;
	}

	span {
		background-color: ${({ theme }) => theme.colors.black[900]};
		width: 1.4rem;
		height: 0.15625rem;
		transition: all 0.3s ease-in-out;

		&:first-child {
			transform: ${(props) => props.$isOpen && 'rotate(45deg) translate(0.3em, 0.3em)'};
		}

		&:nth-child(2) {
			transform-origin: left;
			transform: ${(props) => props.$isOpen && 'scaleX(0)'};
		}

		&:nth-child(3) {
			transform: ${(props) => props.$isOpen && 'rotate(-45deg) translate(0.25em, -0.25em)'};
		}
	}

	&:hover,
	&:focus {
		span {
			background-color: ${({ theme }) => theme.colors.accent};
		}
	}
`;

const MobileMenuStyle = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	background-color: ${({ theme }) => theme.colors.black[900]};
	display: grid;
	place-items: center;
	inset: 0;
	height: 100%;
	width: 100%;
	transition: all 0.3s ease-in-out;
	transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translateX(-100%)')};
	z-index: 20;

	ul {
		display: grid;
		gap: 2rem;
		place-items: center;
	}

	li {
		display: contents;
	}
`;

function MobileMenu({ items }: MobileMenuProps) {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleClick = (link?: string) => {
		setMenuIsOpen(!menuIsOpen);
		if (link) {
			location.href = link;
		}
	};

	return (
		<>
			<HamburgerButton $isOpen={menuIsOpen} onClick={() => handleClick()} role="button" aria-label="menu-button">
				<span></span>
				<span></span>
				<span></span>
			</HamburgerButton>

			<MobileMenuStyle $isOpen={menuIsOpen}>
				<ul>
					{items.map((item, i) => (
						<li key={i}>
							<MobileMenuItem url={item.url} label={item.label} onClick={() => handleClick(item.url)} />
						</li>
					))}
				</ul>
			</MobileMenuStyle>
		</>
	);
}

export default MobileMenu;

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	disabled?: boolean;
	hasMarginTopAuto?: boolean;
	marginBottom?: string;
	size?: string;
	variant: string;
}

const variantStyles = ($variant: string) =>
	({
		primary: css`
			background-color: ${({ theme }) => theme.colors.black[900]};
			color: ${({ theme }) => theme.colors.white};
		`,
		secondary: css`
			background-color: ${({ theme }) => theme.colors.white};
			color: ${({ theme }) => theme.colors.black[900]};
		`,
	}[$variant]);

const ButtonStyle = styled.button<{
	$hasMarginTopAuto?: boolean;
	$marginBottom?: string;
	$variant: string;
	$size?: string;
}>`
	border: none;
	border-radius: 0.34813rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.2rem;
	font-size: ${(props) => props.$size || 'var(--fs-400)'};
	font-weight: var(--fw-medium);
	margin-block-start: ${(props) => props.$hasMarginTopAuto && 'auto'};
	margin-block-end: ${(props) => props.$marginBottom};
	padding: 0.55rem 1rem;
	transition: all 0.3s ease-in-out;

	&:hover:not(:disabled),
	&:focus:not(:disabled) {
		background-color: ${({ theme }) => theme.colors.accent};
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.8;
	}

	${({ $variant }) => variantStyles($variant)}

	svg {
		flex-shrink: 0;
	}
`;

function Button({ children, disabled, hasMarginTopAuto, marginBottom, variant, size, ...props }: ButtonProps) {
	return (
		<ButtonStyle
			disabled={disabled}
			$hasMarginTopAuto={hasMarginTopAuto}
			$variant={variant}
			$marginBottom={marginBottom}
			$size={size}
			{...props}
		>
			{children}
		</ButtonStyle>
	);
}

export default Button;

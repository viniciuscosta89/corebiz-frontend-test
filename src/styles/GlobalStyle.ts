import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
		--size-8: 0.5rem;
		--size-16: 1rem;
		--size-24: 1.5rem;
		--size-32: 2rem;
		--size-48: 3rem;

		--fw-regular: 400;
		--fw-medium: 500;
		--fw-semibold: 600;
		--fw-bold: 700;
		--fw-black: 900;

		--fs-50: 0.625rem;
		--fs-100: 0.6875rem;
		--fs-200: 0.75rem;
		--fs-300: 0.875rem;
		--fs-400: 1rem;
		--fs-500: 1.125rem;
		--fs-600: 1.25rem;
		--fs-700: 1.875rem;
		--fs-800: 2rem;
		--fs-900: 2.8125rem;

		--primary-color: ${({ theme }) => theme.colors.black[900]};
		--accent: ${({ theme }) => theme.colors.accent};
		--bg: ${({ theme }) => theme.colors.white};
		--text: ${({ theme }) => theme.colors.black[900]};

		font-family: ${({ theme }) => theme.fonts.join(',')};		
		line-height: 1.5;
		font-size: var(--fs-400);
		font-weight: var(--fw-regular);
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		scroll-padding-top: 6.5rem;
		height: 100%;

		@media (prefers-reduced-motion: reduce) {
			scroll-behavior: auto;

			body * {
				animation-duration: 0s !important;
				animation-delay: 0s !important;
			}
		}  
	}

	*,
	*::after,
	*::before {
		box-sizing: inherit;
	}

	body {
		background-color: var(--bg);
		color: var(--text);	
	}

	blockquote,
	body,
	figure,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	li,
	ol,
	p,
	pre,
	ul {
		margin: 0;
		padding: 0;
	}

	ul:where([class]) {
		list-style: none;
	}

	button,
	input,
	select,
	textarea {
		color: inherit;
		letter-spacing: inherit;
		font: inherit;
	}

	input[type="text"],
	textarea {
		width: 100%;
	}

	fieldset {
		padding: 0;
		border: none;
	}

	legend {
		margin-bottom: 0.5rem;
		max-width: 100%;
	}

	button,
	input,
	textarea {
		border: 1px solid gray;
	}

	button * {
		pointer-events: none;
	}

	button:hover {
		cursor: pointer;
	}

	embed,
	iframe,
	img,
	object,
	svg,
	video {
		display: block;
		max-width: 100%;
	}

	table {
		width: 100%;
		table-layout: fixed;
	}

	[hidden] {
		display: none !important;
	}

	noscript {
		display: block;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	[tabindex="-1"] {
		outline: none !important;
		box-shadow: none !important;
	}
`;

import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
	colors: {
		black: {
			900: 'hsl(0deg 0% 0%)',
			800: 'hsl(0deg 0% 20%)',
			700: 'hsl(0deg 0% 35%)',
			600: 'hsl(0deg 0% 48%)',
			300: 'hsl(0deg 0% 75%)',
			200: 'hsl(210deg 9% 91%)',
			100: 'hsl(0deg 0% 95%)',
		},
		red: {
			500: 'hsl(354deg 80% 47%)',
			400: 'hsl(352deg 93% 63%)',
		},
		white: 'hsl(255deg 100% 100%)',
		primary: 'hsl(0deg 0% 0%)',
		accent: 'hsl(352deg 93% 63%)',
		danger: 'hsl(354deg 80% 47%)',
	},
	fonts: ['Nunito', 'sans-serif'],
};

export { Theme };

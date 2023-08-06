import { DefaultTheme } from 'styled-components';

export type ThemeType = typeof lightTheme;

export const lightTheme: DefaultTheme = {
	title: 'light',

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
		'always-white': 'hsl(0deg 0% 100%)',
		'always-black': 'hsl(0deg 0% 0%)',
	},
	fonts: ['Nunito', 'sans-serif'],
};

export const darkTheme: ThemeType = {
	title: 'dark',

	colors: {
		black: {
			900: 'hsl(0deg 100% 100%)',
			800: 'hsl(0deg 0% 80%)',
			700: 'hsl(0deg 0% 70%)',
			600: 'hsl(0deg 0% 60%)',
			300: 'hsl(0deg 0% 30%)',
			200: 'hsl(210deg 9% 20%)',
			100: 'hsl(0deg 0% 10%)',
		},
		red: {
			500: 'hsl(354deg 80% 47%)',
			400: 'hsl(352deg 93% 63%)',
		},
		white: 'hsl(255deg 100% 0%)',
		primary: 'hsl(0deg 0% 100%)',
		accent: 'hsl(352deg 93% 63%)',
		danger: 'hsl(354deg 80% 47%)',
		'always-white': 'hsl(0deg 0% 100%)',
		'always-black': 'hsl(0deg 0% 0%)',
	},
	fonts: ['Nunito', 'sans-serif'],
};

const myTheme = lightTheme;

export default myTheme;

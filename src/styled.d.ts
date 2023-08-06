import 'styled-components';
import { ThemeType } from './styles/DefaultTheme';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {
		title: string;

		colors: {
			black: {
				900: string;
				800: string;
				700: string;
				600: string;
				300: string;
				200: string;
				100: string;
			};
			white: string;
			red: {
				500: string;
				400: string;
			};
			primary: string;
			accent: string;
			danger: string;
			'always-white': string;
			'always-black': string;
		};
		fonts: string[];
	}
}

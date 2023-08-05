// import original module declarations
import 'styled-components';
import { Theme } from './src/styles/Theme';

export type ITheme = typeof Theme;

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {
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
				400: string;
			};
			primary: string;
			accent: string;
			danger: string;
		};
		fonts: string[];
	}
}

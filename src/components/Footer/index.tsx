import { lazy } from 'react';

const FooterAddress = lazy(() => import('./FooterAddress'));
const FooterBottom = lazy(() => import('./FooterBottom'));
const FooterButton = lazy(() => import('./FooterButton'));
const FooterButtons = lazy(() => import('./FooterButtons'));
const FooterGrid = lazy(() => import('./FooterGrid'));
const FooterRoot = lazy(() => import('./FooterRoot'));
const FooterTitle = lazy(() => import('./FooterTitle'));

const Footer = {
	Root: FooterRoot,
	Address: FooterAddress,
	Bottom: FooterBottom,
	Button: FooterButton,
	Buttons: FooterButtons,
	Grid: FooterGrid,
	Title: FooterTitle,
};

export default Footer;

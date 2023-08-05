import { lazy } from 'react';
const NewsletterForm = lazy(() => import('./NewsletterForm'));
const NewsletterRoot = lazy(() => import('./NewsletterRoot'));
const NewsletterTitle = lazy(() => import('./NewsletterTitle'));

const Newsletter = {
	Root: NewsletterRoot,
	Form: NewsletterForm,
	Title: NewsletterTitle,
};

export default Newsletter;

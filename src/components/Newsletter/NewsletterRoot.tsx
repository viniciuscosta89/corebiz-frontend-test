import { ReactNode } from 'react';
import styled from 'styled-components';

interface NewsletterRootProps {
	children: ReactNode;
}

const NewsletterRootStyle = styled.section`
	background-color: ${({ theme }) => theme.colors.black[100]};
	padding: 1.5rem 0.25rem 1rem;
	position: relative;
`;

function NewsletterRoot({ children }: NewsletterRootProps) {
	return <NewsletterRootStyle id="newsletter">{children}</NewsletterRootStyle>;
}

export default NewsletterRoot;

import styled from 'styled-components';

interface NewsletterTitleProps {
	text: string;
}

const NewsletterTitleStyle = styled.h2`
	color: ${({ theme }) => theme.colors.black[800]};
	font-size: var(--fs-600);
	font-weight: var(--fw-bold);
	line-height: 1;
	margin-block-end: 1.25rem;

	@media (min-width: 1140px) {
		text-align: center;
	}
`;

function NewsletterTitle({ text }: NewsletterTitleProps) {
	return <NewsletterTitleStyle>{text}</NewsletterTitleStyle>;
}

export default NewsletterTitle;

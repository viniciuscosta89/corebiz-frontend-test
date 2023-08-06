import styled, { ThemeContext } from 'styled-components';
import { Rating, ThinStar } from '@smastrom/react-rating';
import type { ItemStyles } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import { useContext } from 'react';

interface ProductsRatingProps {
	ratingNumber: number;
}

const ProductsRatingStyle = styled(Rating)`
	margin: 0 auto 1.25rem;
	max-width: 4.32444rem;
`;

function ProductsRating({ ratingNumber }: ProductsRatingProps) {
	const themeContext = useContext(ThemeContext);

	const ratingStyle: ItemStyles = {
		itemShapes: ThinStar,
		itemStrokeWidth: 2,
		activeFillColor: themeContext?.colors.accent,
		activeStrokeColor: themeContext?.colors.accent,
		inactiveFillColor: themeContext?.colors.white,
		inactiveStrokeColor: themeContext?.colors.accent,
	};

	return <ProductsRatingStyle value={ratingNumber} itemStyles={ratingStyle} readOnly />;
}

export default ProductsRating;

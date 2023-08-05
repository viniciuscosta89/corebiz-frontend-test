import styled from 'styled-components';
import { Rating, ThinStar } from '@smastrom/react-rating';
import type { ItemStyles } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

interface ProductsRatingProps {
	ratingNumber: number;
}

const ratingStyle: ItemStyles = {
	itemShapes: ThinStar,
	itemStrokeWidth: 2,
	activeFillColor: 'var(--accent)',
	activeStrokeColor: 'var(--accent)',
	inactiveFillColor: '#fff',
	inactiveStrokeColor: 'var(--accent)',
};

const ProductsRatingStyle = styled(Rating)`
	margin: 0 auto 1.25rem;
	max-width: 4.32444rem;
`;

function ProductsRating({ ratingNumber }: ProductsRatingProps) {
	return <ProductsRatingStyle value={ratingNumber} itemStyles={ratingStyle} readOnly />;
}

export default ProductsRating;

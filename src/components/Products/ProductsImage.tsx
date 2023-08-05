import styled from 'styled-components';
import { Variants, motion } from 'framer-motion';

interface ProductsImageProps {
	src: string;
	alt?: string;
}

const ProductsImageStyle = styled(motion.img)`
	aspect-ratio: 132 / 122;
	object-fit: contain;
`;

const imgVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			delay: 0.8,
		},
	},
};

function ProductsImage({ src, alt }: ProductsImageProps) {
	return <ProductsImageStyle src={src} alt={alt} variants={imgVariants} />;
}

export default ProductsImage;

import { ReactNode } from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderRootProps {
	className?: string;
	children: ReactNode;
	gutter?: {
		mobile?: number;
		desktop?: number;
	};
	height?: {
		mobile?: string;
		desktop?: string;
	};
	isPositionRelative?: boolean;
	navigation?: {
		mobile?: boolean;
		desktop?: boolean;
	};
	slides: {
		mobile?: number;
		desktop?: number;
	};
}

const SwiperCustom = styled(Swiper)<{
	$heightDesktop?: string;
	$heightMobile?: string;
	$isPositionRelative?: boolean;
	$navigationMobile?: boolean;
	$navigationDesktop?: boolean;
}>`
	.swiper-wrapper {
		height: ${(props) => props.$heightMobile};

		@media (min-width: 1140px) {
			height: ${(props) => props.$heightDesktop};
		}
	}

	.swiper-pagination {
		position: ${(props) => props.$isPositionRelative && 'relative'};
		bottom: ${(props) => props.$isPositionRelative && 0};
		margin-block-start: ${(props) => props.$isPositionRelative && '1rem'};
	}

	.swiper-slide {
		height: auto;
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: ${({ theme }) => theme.colors.black[900]};
		display: ${(props) => (props.$navigationMobile ? 'flex' : 'none')};
		width: 1.375rem;

		&::after {
			font-size: 1.375rem;
			font-weight: var(--fw-bold);
		}

		@media (min-width: 1140px) {
			display: ${(props) => (props.$navigationDesktop ? 'flex' : 'none')};
		}
	}

	.swiper-button-prev {
		left: 0;
	}

	.swiper-button-next {
		right: 0;
	}

	.swiper-pagination-bullet {
		background-color: ${({ theme }) => theme.colors.black[300]};
		opacity: 0.75;
		transition: all 0.3s ease-in-out;
	}

	.swiper-pagination-bullet-active {
		background-color: ${({ theme }) => theme.colors.accent};
		opacity: 1;
	}
`;

function SliderRoot({
	children,
	className,
	height,
	slides,
	gutter = { mobile: 0, desktop: 0 },
	navigation = { mobile: false, desktop: false },
	isPositionRelative,
}: SliderRootProps) {
	return (
		<SwiperCustom
			className={className}
			modules={[Navigation, Pagination]}
			$navigationDesktop={navigation?.desktop}
			$navigationMobile={navigation?.mobile}
			navigation
			pagination={{ clickable: true }}
			slidesPerView={slides.mobile}
			spaceBetween={gutter.mobile}
			$isPositionRelative={isPositionRelative}
			$heightDesktop={height?.desktop}
			$heightMobile={height?.mobile}
			breakpoints={{
				1140: {
					slidesPerView: slides.desktop,
					spaceBetween: gutter.desktop,
				},
			}}
		>
			{children}
		</SwiperCustom>
	);
}

export default SliderRoot;

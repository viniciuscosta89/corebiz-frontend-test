import { ReactNode } from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

interface SliderItemProps {
	children: ReactNode;
}

const SwiperItem = styled(SwiperSlide)`
	position: relative;
`;

function SliderItem({ children }: SliderItemProps) {
	return <SwiperItem>{children}</SwiperItem>;
}

SliderItem.displayName = 'SwiperSlider';

export default SliderItem;

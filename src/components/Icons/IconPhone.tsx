import type { IconProps } from '../../types/iconTypes';

function IconPhone({ color }: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill={color}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.5 0C3.80611 0 0 3.66364 0 8.18182V14.5455C0 16.0545 1.26556 17.2727 2.83333 17.2727H5.66667V10H1.88889V8.18182C1.88889 4.66364 4.845 1.81818 8.5 1.81818C12.155 1.81818 15.1111 4.66364 15.1111 8.18182V10H11.3333V17.2727H15.1111V18.1818H8.5V20H14.1667C15.7344 20 17 18.7818 17 17.2727V8.18182C17 3.66364 13.1939 0 8.5 0Z"
				fill="inherit"
			/>
		</svg>
	);
}

export default IconPhone;

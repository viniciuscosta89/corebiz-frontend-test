import styled from 'styled-components';

interface IconProps {
	color: string;
}

const IconStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

function IconPoweredBy({ color }: IconProps) {
	return (
		<IconStyle>
			<svg width="54" height="10" viewBox="0 0 54 10" fill={color} xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1.28 8.05C1.15333 8.05 1.05333 8.01333 0.98 7.94C0.906667 7.86 0.87 7.75667 0.87 7.63V1.35C0.87 1.23 0.906667 1.13333 0.98 1.06C1.06 0.986666 1.16333 0.95 1.29 0.95H3.66C4.4 0.95 4.97333 1.13 5.38 1.49C5.79333 1.85 6 2.36 6 3.02C6 3.68 5.79333 4.19333 5.38 4.56C4.96667 4.92667 4.39333 5.11 3.66 5.11H1.69V7.63C1.69 7.75667 1.65333 7.86 1.58 7.94C1.50667 8.01333 1.40667 8.05 1.28 8.05ZM3.58 4.43C4.65333 4.43 5.19 3.96 5.19 3.02C5.19 2.09333 4.65333 1.63 3.58 1.63H1.69V4.43H3.58ZM9.05906 8.07C8.59906 8.07 8.1924 7.96667 7.83906 7.76C7.4924 7.55333 7.2224 7.26 7.02906 6.88C6.8424 6.49333 6.74906 6.04667 6.74906 5.54C6.74906 5.03333 6.8424 4.59 7.02906 4.21C7.2224 3.82333 7.4924 3.52667 7.83906 3.32C8.1924 3.11333 8.59906 3.01 9.05906 3.01C9.51906 3.01 9.92573 3.11333 10.2791 3.32C10.6324 3.52667 10.9024 3.82333 11.0891 4.21C11.2824 4.59 11.3791 5.03333 11.3791 5.54C11.3791 6.04667 11.2824 6.49333 11.0891 6.88C10.9024 7.26 10.6324 7.55333 10.2791 7.76C9.92573 7.96667 9.51906 8.07 9.05906 8.07ZM9.05906 7.4C9.53906 7.4 9.90573 7.24333 10.1591 6.93C10.4191 6.61 10.5491 6.14667 10.5491 5.54C10.5491 4.94667 10.4191 4.49 10.1591 4.17C9.89906 3.84333 9.5324 3.68 9.05906 3.68C8.58573 3.68 8.21906 3.84333 7.95906 4.17C7.69906 4.49 7.56906 4.94667 7.56906 5.54C7.56906 6.14 7.69573 6.6 7.94906 6.92C8.20906 7.24 8.57906 7.4 9.05906 7.4ZM19.1873 3.29C19.254 3.13 19.364 3.05 19.5173 3.05C19.6173 3.05 19.7073 3.08333 19.7873 3.15C19.8673 3.21667 19.9073 3.3 19.9073 3.4C19.9073 3.44667 19.8973 3.49667 19.8773 3.55L18.2173 7.75C18.1773 7.83667 18.1173 7.90667 18.0373 7.96C17.964 8.00667 17.8807 8.03 17.7873 8.03C17.7007 8.03 17.6173 8.00667 17.5373 7.96C17.464 7.90667 17.4073 7.83667 17.3673 7.75L15.9873 4.24L14.6173 7.75C14.584 7.83667 14.5273 7.90667 14.4473 7.96C14.3673 8.00667 14.2807 8.03 14.1873 8.03C14.1007 8.03 14.0173 8.00667 13.9373 7.96C13.8573 7.90667 13.7973 7.83667 13.7573 7.75L12.0973 3.56C12.0773 3.50667 12.0673 3.46 12.0673 3.42C12.0673 3.31333 12.1107 3.22333 12.1973 3.15C12.2907 3.07667 12.3907 3.04 12.4973 3.04C12.6573 3.04 12.7707 3.12 12.8373 3.28L14.2073 6.97L15.6173 3.31C15.6573 3.22333 15.7107 3.15667 15.7773 3.11C15.8507 3.06333 15.9273 3.04 16.0073 3.04C16.094 3.04 16.1707 3.06333 16.2373 3.11C16.3107 3.15667 16.364 3.22333 16.3973 3.31L17.8073 6.96L19.1873 3.29ZM24.6567 6.87C24.7301 6.87 24.7934 6.9 24.8467 6.96C24.9001 7.02 24.9267 7.09667 24.9267 7.19C24.9267 7.35667 24.8101 7.51 24.5767 7.65C24.3367 7.79 24.0834 7.89667 23.8167 7.97C23.5501 8.03667 23.2901 8.07 23.0367 8.07C22.2834 8.07 21.6867 7.84667 21.2467 7.4C20.8134 6.95333 20.5967 6.33667 20.5967 5.55C20.5967 5.05 20.6934 4.61 20.8867 4.23C21.0801 3.84333 21.3501 3.54333 21.6967 3.33C22.0501 3.11667 22.4501 3.01 22.8967 3.01C23.5301 3.01 24.0334 3.21667 24.4067 3.63C24.7801 4.04333 24.9667 4.60333 24.9667 5.31C24.9667 5.44333 24.9401 5.54 24.8867 5.6C24.8334 5.66 24.7467 5.69 24.6267 5.69H21.4067C21.4667 6.83667 22.0101 7.41 23.0367 7.41C23.2967 7.41 23.5201 7.37667 23.7067 7.31C23.8934 7.23667 24.0934 7.14 24.3067 7.02C24.4801 6.92 24.5967 6.87 24.6567 6.87ZM22.9067 3.64C22.4801 3.64 22.1367 3.77333 21.8767 4.04C21.6234 4.30667 21.4734 4.68333 21.4267 5.17H24.2567C24.2434 4.67667 24.1201 4.3 23.8867 4.04C23.6534 3.77333 23.3267 3.64 22.9067 3.64ZM28.5702 3.03C28.8502 3.01 28.9902 3.12333 28.9902 3.37C28.9902 3.47667 28.9602 3.56333 28.9002 3.63C28.8402 3.69 28.7368 3.72667 28.5902 3.74L28.2902 3.77C27.8435 3.81 27.5102 3.97 27.2902 4.25C27.0768 4.52333 26.9702 4.84667 26.9702 5.22V7.65C26.9702 7.78333 26.9335 7.88333 26.8602 7.95C26.7868 8.01667 26.6902 8.05 26.5702 8.05C26.4502 8.05 26.3502 8.01667 26.2702 7.95C26.1968 7.87667 26.1602 7.77667 26.1602 7.65V3.43C26.1602 3.30333 26.2002 3.20667 26.2802 3.14C26.3602 3.06667 26.4568 3.03 26.5702 3.03C26.6768 3.03 26.7668 3.06667 26.8402 3.14C26.9135 3.20667 26.9502 3.3 26.9502 3.42V3.98C27.0902 3.68667 27.2868 3.46333 27.5402 3.31C27.8002 3.15667 28.0968 3.06667 28.4302 3.04L28.5702 3.03ZM33.3579 6.87C33.4312 6.87 33.4946 6.9 33.5479 6.96C33.6012 7.02 33.6279 7.09667 33.6279 7.19C33.6279 7.35667 33.5112 7.51 33.2779 7.65C33.0379 7.79 32.7846 7.89667 32.5179 7.97C32.2512 8.03667 31.9912 8.07 31.7379 8.07C30.9846 8.07 30.3879 7.84667 29.9479 7.4C29.5146 6.95333 29.2979 6.33667 29.2979 5.55C29.2979 5.05 29.3946 4.61 29.5879 4.23C29.7812 3.84333 30.0512 3.54333 30.3979 3.33C30.7512 3.11667 31.1512 3.01 31.5979 3.01C32.2312 3.01 32.7346 3.21667 33.1079 3.63C33.4812 4.04333 33.6679 4.60333 33.6679 5.31C33.6679 5.44333 33.6412 5.54 33.5879 5.6C33.5346 5.66 33.4479 5.69 33.3279 5.69H30.1079C30.1679 6.83667 30.7112 7.41 31.7379 7.41C31.9979 7.41 32.2212 7.37667 32.4079 7.31C32.5946 7.23667 32.7946 7.14 33.0079 7.02C33.1812 6.92 33.2979 6.87 33.3579 6.87ZM31.6079 3.64C31.1812 3.64 30.8379 3.77333 30.5779 4.04C30.3246 4.30667 30.1746 4.68333 30.1279 5.17H32.9579C32.9446 4.67667 32.8212 4.3 32.5879 4.04C32.3546 3.77333 32.0279 3.64 31.6079 3.64ZM38.7713 0.9C38.898 0.9 38.998 0.936666 39.0713 1.01C39.1447 1.08333 39.1813 1.17667 39.1813 1.29V7.65C39.1813 7.77 39.1447 7.86667 39.0713 7.94C38.998 8.01333 38.898 8.05 38.7713 8.05C38.6447 8.05 38.5447 8.01333 38.4713 7.94C38.4047 7.86667 38.3713 7.77 38.3713 7.65V7.11C38.2247 7.41667 38.008 7.65333 37.7213 7.82C37.4413 7.98667 37.1113 8.07 36.7313 8.07C36.3047 8.07 35.928 7.96333 35.6013 7.75C35.2747 7.53667 35.0213 7.24 34.8413 6.86C34.6613 6.47333 34.5713 6.02667 34.5713 5.52C34.5713 5.02 34.6613 4.58 34.8413 4.2C35.0213 3.82 35.2747 3.52667 35.6013 3.32C35.928 3.11333 36.3047 3.01 36.7313 3.01C37.1113 3.01 37.4413 3.09333 37.7213 3.26C38.008 3.42667 38.2247 3.66333 38.3713 3.97V1.29C38.3713 1.17 38.4047 1.07667 38.4713 1.01C38.5447 0.936666 38.6447 0.9 38.7713 0.9ZM36.8913 7.4C37.3647 7.4 37.728 7.24 37.9813 6.92C38.2413 6.59333 38.3713 6.13333 38.3713 5.54C38.3713 4.94667 38.2413 4.49 37.9813 4.17C37.728 3.85 37.3647 3.69 36.8913 3.69C36.418 3.69 36.048 3.85 35.7813 4.17C35.5213 4.49 35.3913 4.94 35.3913 5.52C35.3913 6.11333 35.5213 6.57667 35.7813 6.91C36.048 7.23667 36.418 7.4 36.8913 7.4ZM45.7098 3.01C46.1364 3.01 46.5131 3.11333 46.8398 3.32C47.1664 3.52667 47.4198 3.82 47.5998 4.2C47.7798 4.58 47.8698 5.02 47.8698 5.52C47.8698 6.02667 47.7798 6.47333 47.5998 6.86C47.4198 7.24 47.1664 7.53667 46.8398 7.75C46.5131 7.96333 46.1364 8.07 45.7098 8.07C45.3298 8.07 44.9964 7.98667 44.7098 7.82C44.4298 7.65333 44.2164 7.41667 44.0698 7.11V7.65C44.0698 7.77 44.0331 7.86667 43.9598 7.94C43.8931 8.01333 43.7964 8.05 43.6698 8.05C43.5431 8.05 43.4431 8.01333 43.3698 7.94C43.2964 7.86667 43.2598 7.77 43.2598 7.65V1.29C43.2598 1.17667 43.2964 1.08333 43.3698 1.01C43.4431 0.936666 43.5431 0.9 43.6698 0.9C43.7964 0.9 43.8931 0.936666 43.9598 1.01C44.0331 1.07667 44.0698 1.17 44.0698 1.29V3.97C44.2164 3.66333 44.4298 3.42667 44.7098 3.26C44.9964 3.09333 45.3298 3.01 45.7098 3.01ZM45.5498 7.4C46.0231 7.4 46.3898 7.23667 46.6498 6.91C46.9098 6.57667 47.0398 6.11333 47.0398 5.52C47.0398 4.94 46.9098 4.49 46.6498 4.17C46.3898 3.85 46.0231 3.69 45.5498 3.69C45.0764 3.69 44.7098 3.85 44.4498 4.17C44.1964 4.49 44.0698 4.94667 44.0698 5.54C44.0698 6.13333 44.1964 6.59333 44.4498 6.92C44.7098 7.24 45.0764 7.4 45.5498 7.4ZM52.5315 3.28C52.6048 3.12 52.7215 3.04 52.8815 3.04C52.9815 3.04 53.0715 3.07333 53.1515 3.14C53.2315 3.20667 53.2715 3.29 53.2715 3.39C53.2715 3.45 53.2582 3.50333 53.2315 3.55L50.4215 9.61C50.3882 9.68333 50.3382 9.74 50.2715 9.78C50.2115 9.82 50.1482 9.84 50.0815 9.84C49.9815 9.84 49.8915 9.80667 49.8115 9.74C49.7382 9.68 49.7015 9.6 49.7015 9.5C49.7015 9.44667 49.7148 9.39333 49.7415 9.34L50.4415 7.83L48.4615 3.55C48.4348 3.50333 48.4215 3.45333 48.4215 3.4C48.4215 3.3 48.4648 3.21333 48.5515 3.14C48.6448 3.06667 48.7448 3.03 48.8515 3.03C48.9182 3.03 48.9815 3.05 49.0415 3.09C49.1082 3.13 49.1582 3.18667 49.1915 3.26L50.8615 7.01L52.5315 3.28Z"
					fill="inherit"
				/>
			</svg>

			<svg width="49" height="17" viewBox="0 0 49 17" fill={color} xmlns="http://www.w3.org/2000/svg">
				<path
					d="M34.8284 6.36509H33.1109V12.1713C33.1109 12.28 33.0164 12.3731 32.9061 12.3731H31.5825C31.4722 12.3731 31.3776 12.28 31.3776 12.1713V6.36509H29.6444C29.5971 6.36509 29.5341 6.34957 29.5026 6.31852C29.471 6.28747 29.4395 6.24089 29.4395 6.1788V5.15417C29.4395 5.1076 29.4553 5.0455 29.5026 5.01445C29.5341 4.9834 29.5971 4.95235 29.6444 4.96788H34.8284C34.9387 4.96788 35.0333 5.0455 35.0333 5.15417V6.1788C35.0333 6.28747 34.9387 6.36509 34.8284 6.36509Z"
					fill="inherit"
				/>
				<path
					d="M40.3434 12.3266C39.6658 12.4197 38.9725 12.4663 38.295 12.4508C36.9871 12.4508 35.8369 12.1247 35.8369 10.3084V7.00161C35.8369 5.18523 37.0029 4.87474 38.3107 4.87474C38.9883 4.85921 39.6658 4.90579 40.3434 4.99894C40.4852 5.01446 40.5482 5.07656 40.5482 5.20076V6.13223C40.5482 6.2409 40.4537 6.33405 40.3434 6.33405H38.2162C37.7435 6.33405 37.5701 6.4893 37.5701 7.01714V7.91756H40.2646C40.3749 7.91756 40.4694 8.01071 40.4694 8.11938V9.06639C40.4694 9.17506 40.3749 9.26821 40.2646 9.26821H37.5701V10.3239C37.5701 10.8362 37.7435 11.007 38.2162 11.007H40.3434C40.4537 11.007 40.5482 11.1001 40.5482 11.2088V12.1403C40.5482 12.2489 40.4852 12.311 40.3434 12.3266Z"
					fill="inherit"
				/>
				<path
					d="M47.9697 12.3731H46.3625C46.2522 12.3887 46.1419 12.3266 46.0947 12.2179L44.6923 10.0444L43.4317 12.1713C43.3687 12.2955 43.2899 12.3731 43.1796 12.3731H41.6827C41.6512 12.3731 41.6039 12.3731 41.5724 12.3421C41.5409 12.311 41.5251 12.28 41.5251 12.2334C41.5251 12.2024 41.5409 12.1868 41.5409 12.1713L43.7311 8.5696L41.5094 5.15418C41.4936 5.13866 41.4936 5.10761 41.4936 5.09208C41.4936 5.01446 41.5724 4.95236 41.6512 4.96789H43.3057C43.416 4.96789 43.4948 5.06103 43.5578 5.15418L44.8499 7.17238L46.1104 5.15418C46.1577 5.04551 46.2522 4.98341 46.3625 4.96789H47.8594C47.9382 4.96789 48.017 5.01446 48.017 5.09208C48.017 5.10761 48.0013 5.13866 48.0013 5.15418L45.7953 8.60065L48.0958 12.1713C48.1116 12.2024 48.1273 12.2334 48.1273 12.2645C48.1116 12.3266 48.0643 12.3731 47.9697 12.3731Z"
					fill="inherit"
				/>
				<path
					d="M27.0129 4.98342C26.9342 4.98342 26.8711 5.02999 26.8554 5.10761L25.39 10.4636C25.3742 10.5723 25.3427 10.6189 25.2482 10.6189C25.1536 10.6189 25.1221 10.5723 25.1063 10.4636L23.6409 5.10761C23.6252 5.02999 23.5622 4.98342 23.4834 4.98342H22.0337C21.9865 4.98342 21.9392 4.99894 21.9077 5.04552C21.8762 5.07657 21.8604 5.12314 21.8762 5.16971C21.8762 5.16971 23.6725 11.3175 23.6882 11.3796C23.9246 12.1092 24.5076 12.4663 25.2482 12.4663C25.9572 12.4973 26.6033 12.0471 26.8081 11.3796C26.8396 11.3019 28.5886 5.16971 28.5886 5.16971C28.6044 5.12314 28.5886 5.07657 28.5571 5.04552C28.5256 5.01447 28.4783 4.98342 28.4311 4.98342H27.0129Z"
					fill="inherit"
				/>
				<path
					d="M18.8193 0H3.73988C3.18838 0 2.68416 0.294968 2.41629 0.745182C2.13266 1.21092 2.11691 1.78533 2.36902 2.25107L3.88169 5.07655H1.13997C0.793321 5.07655 0.462424 5.24732 0.273341 5.54229C0.0842566 5.83726 0.0842565 6.20985 0.241826 6.52034L5.09498 15.5557C5.26831 15.8817 5.61496 16.0835 5.97737 16.0835C6.33978 16.0835 6.68643 15.8817 6.85976 15.5557L8.18335 13.1028L9.83783 16.1922C10.1057 16.689 10.6414 16.9995 11.2087 16.9995C11.7759 16.9995 12.3117 16.689 12.5795 16.1922L20.1429 2.17345C20.395 1.70771 20.3793 1.14882 20.0956 0.714132C19.8435 0.263918 19.3551 0 18.8193 0ZM12.0753 5.91488L8.76636 12.0316C8.65606 12.2489 8.43546 12.3731 8.18335 12.3731C7.93124 12.3731 7.71064 12.2334 7.60034 12.0316L4.33864 5.97698C4.2441 5.79068 4.2441 5.57334 4.3544 5.38704C4.4647 5.20075 4.66954 5.09207 4.87438 5.09207H11.5553C11.7602 5.09207 11.9493 5.18522 12.0438 5.35599C12.1699 5.52676 12.1699 5.74411 12.0753 5.91488Z"
					fill="inherit"
				/>
			</svg>
		</IconStyle>
	);
}

export default IconPoweredBy;

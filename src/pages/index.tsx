import { MouseEvent, Suspense, useContext } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import MobileMenu from '../components/MobileMenu';
import Container from '../components/Container';
import { useProducts } from '../hooks/useProducts';
import Button from '../components/Button';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import Footer from '../components/Footer';
import Icons from '../components/Icons';
import bannerUrl from '/assets/banner.jpg';

const ContainerAbsolute = styled(Container)`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	inset: 0;

	${Container} {
		width: 100%;

		@media (min-width: 1140px) {
			margin-inline: 0;
			max-width: 50%;
		}
	}
`;

const SliderMediumTitle = styled.h3`
	color: ${({ theme }) => theme.colors.white};
	font-size: var(--fs-600);
	font-weight: var(--fw-bold);
	line-height: 1;

	@media (min-width: 1140px) {
		font-size: var(--fs-700);
	}
`;

const SliderLargeTitle = styled.h3`
	color: ${({ theme }) => theme.colors.white};
	font-size: var(--fs-700);
	font-weight: var(--fw-black);
	line-height: 1;

	@media (min-width: 1140px) {
		font-size: var(--fs-900);
	}
`;

const SliderBanner = styled.img`
	height: 100%;
	object-fit: cover;
`;

const sliderData = [1, 2, 3, 4, 5];

function Home() {
	const { data: products } = useProducts();
	const { handleShoppingCartItems } = useContext(ShoppingCartContext);

	const handleBuyButton = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleShoppingCartItems();
	};

	return (
		<>
			<Header.Root>
				<Container>
					<Header.Grid>
						<MobileMenu
							items={[
								{ url: '#', label: 'Minha Conta' },
								{ url: '#best-sellers', label: 'Mais Vendidos' },
								{ url: '#newsletter', label: 'Newsletter' },
							]}
						/>
						<Icons.Logo />
						<Header.Account />
						<Header.ShoppingCart />
						<Header.SearchBar />
					</Header.Grid>
				</Container>
			</Header.Root>

			<main>
				<Suspense
					fallback={
						<Container
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ ease: 'easeIn', duration: 0.3 }}
						>
							<p>
								<Icons.Loading />
								Loading...
							</p>
						</Container>
					}
				>
					<Slider.Root
						className="slider"
						slides={{ mobile: 1, desktop: 1 }}
						height={{ mobile: '12rem', desktop: '26.875rem' }}
					>
						{sliderData.map((slide) => (
							<Slider.Item key={slide}>
								<SliderBanner src={bannerUrl} alt="Banner" />
								<ContainerAbsolute>
									<Container>
										<SliderMediumTitle>Olá, o que você está buscando?</SliderMediumTitle>
										<SliderLargeTitle>Criar ou migrar seu e-commerce?</SliderLargeTitle>
									</Container>
								</ContainerAbsolute>
							</Slider.Item>
						))}
					</Slider.Root>
				</Suspense>

				<AnimatePresence mode="wait">
					<Suspense
						fallback={
							<Container
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ ease: 'easeIn', duration: 0.3 }}
							>
								<Icons.Loading />
							</Container>
						}
					>
						<Products.Root>
							<Container>
								<Products.Title text="Mais Vendidos" />

								<Suspense
									fallback={
										<Container
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ ease: 'easeIn', duration: 0.3 }}
										>
											<Icons.Loading />
										</Container>
									}
								>
									<Slider.Root
										className="products-carousel"
										slides={{ mobile: 2, desktop: 4 }}
										gutter={{ mobile: 24, desktop: 100 }}
										isPositionRelative
										navigation={{ mobile: false, desktop: true }}
									>
										{products
											?.sort((a, b) => {
												if (a.rating.count < b.rating.count) {
													return 1;
												}
												if (a.rating.count > b.rating.count) {
													return -1;
												}
												return 0;
											})
											.slice(0, 5)
											.map((product) => (
												<Slider.Item key={product.id}>
													<Products.Item>
														<Products.Image src={product.image} alt={product.title} />
														<Products.Content>
															<Products.Name text={product.title} />
															<Products.Rating ratingNumber={product.rating.rate} />
															<Products.PricesContainer>
																<Products.Price price={product.price} />
															</Products.PricesContainer>
															<Button
																hasMarginTopAuto
																onClick={(e) => handleBuyButton(e)}
																variant="primary"
																size="var(--fs-200)"
															>
																COMPRAR
															</Button>
														</Products.Content>
													</Products.Item>
												</Slider.Item>
											))}
									</Slider.Root>
								</Suspense>
							</Container>
						</Products.Root>
					</Suspense>
				</AnimatePresence>

				<Newsletter.Root>
					<Container>
						<Newsletter.Form />
					</Container>
				</Newsletter.Root>
			</main>

			<Footer.Root>
				<Container>
					<Suspense
						fallback={
							<Container
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ ease: 'easeIn', duration: 0.3 }}
							>
								<Icons.Loading />
							</Container>
						}
					>
						<Footer.Grid>
							<div>
								<Footer.Title>Localização</Footer.Title>
								<Footer.Address>
									<p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
									<p>Alphavile SP</p>
									<p>
										<a href="mailto:brasil@corebiz.ag" target="_blank">
											brasil@corebiz.ag
										</a>
									</p>
									<p>
										<a href="tel:551130901039" target="_blank">
											+55 11 3090 1039
										</a>
									</p>
								</Footer.Address>
							</div>

							<Footer.Buttons>
								<Footer.Button variant="secondary" size="var(--fs-200)">
									<Icons.Mail color="inherit" />
									<span>ENTRE EM CONTATO</span>
								</Footer.Button>
								<Footer.Button variant="secondary" size="var(--fs-200)">
									<Icons.Phone color="inherit" />
									<span>FALE COM O NOSSO CONSULTOR ONLINE</span>
								</Footer.Button>
							</Footer.Buttons>

							<Footer.Bottom>
								<Icons.CreatedBy color="#fff" />
								<Icons.PoweredBy color="#fff" />
							</Footer.Bottom>
						</Footer.Grid>
					</Suspense>
				</Container>
			</Footer.Root>
		</>
	);
}

export default Home;

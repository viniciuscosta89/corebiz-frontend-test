import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import Button from '../Button';
import NewsletterTitle from './NewsletterTitle';

const NewsletterFormStyle = styled.form`
	position: relative;
	display: grid;
	gap: 22px;

	@media (min-width: 1140px) {
		gap: 0.5rem;
		grid-template-columns: 1fr 1fr auto;
		padding-inline: 15rem;
	}
`;

const NewsletterSuccessContainer = styled(motion.div)`
	color: ${({ theme }) => theme.colors.black[900]};
	display: grid;
	gap: 1rem;
	line-height: 1;
	text-align: center;

	@media (min-width: 1140px) {
		justify-content: center;
	}

	p {
		font-size: var(--fs-300);
		font-weight: var(--fw-bold);
	}

	small {
		font-size: var(--fs-200);
	}
`;

const NewsletterInputStyle = styled.input<{ $hasError: boolean }>`
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid transparent;
	border-color: ${(props) => props.$hasError && (({ theme }) => theme.colors.danger)};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.black[700]};
	font-size: var(--fs-200);
	font-weight: var(--fw-bold);
	padding: 1rem;
	position: relative;
	width: 100%;

	@media (min-width: 1140px) {
		height: 3rem;
		margin-block-end: 0.5rem;
	}

	&:hover,
	&:focus {
		border-color: ${({ theme }) => theme.colors.black[300]};
	}
`;

const ErrorMessageStyle = styled.p`
	color: ${({ theme }) => theme.colors.danger};
	font-size: var(--fs-200);
`;

const NewsletterButton = styled(Button)`
	@media (min-width: 1140px) {
		font-size: var(--fs-300);
		font-weight: var(--fw-bold);
		height: 3rem;
		min-width: 8.75rem;
	}
`;

const contactSchema = z
	.object({
		username: z.string().min(1, { message: 'Preencha com seu nome completo' }),
		email: z
			.string()
			.min(1, { message: 'E-mail é um campo obrigatório' })
			.email({
				message: 'Preencha com um e-mail válido',
			})
			.trim(),
	})
	.required();

type ContactSchema = z.infer<typeof contactSchema>;

function NewsletterForm() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful, isDirty },
	} = useForm<ContactSchema>({
		defaultValues: {
			username: '',
			email: '',
		},
		resolver: zodResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactSchema> = (formData) => {
		axios
			.post(
				'https://fakestoreapi.com/users',
				{
					usarname: formData.username,
					email: formData.email,
				},
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			.then(function (response: any) {
				console.log(response);
			})
			.catch(function (error: any) {
				console.log(error);
			});
	};

	return (
		<>
			<AnimatePresence>
				{isSubmitSuccessful ? (
					<NewsletterSuccessContainer
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<div>
							<p>Seu e-mail foi cadastrado com sucesso!</p>
							<small>A partir de agora você receberá as novidade e ofertas exclusivas.</small>
						</div>

						<NewsletterButton onClick={() => reset()} variant="primary">
							Cadastrar novo e-mail
						</NewsletterButton>
					</NewsletterSuccessContainer>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<NewsletterTitle text="Participe de nossas news com promoções e novidades!" />
						<NewsletterFormStyle onSubmit={handleSubmit(onSubmit)}>
							<fieldset>
								<NewsletterInputStyle
									type="text"
									{...register('username')}
									placeholder="Digite seu nome"
									$hasError={!!errors.username}
								/>
								<ErrorMessage
									errors={errors}
									name="username"
									render={({ message }) => <ErrorMessageStyle>{message}</ErrorMessageStyle>}
								/>
							</fieldset>

							<fieldset>
								<NewsletterInputStyle
									{...register('email')}
									placeholder="Digite seu email"
									$hasError={!!errors.email}
								/>
								<ErrorMessage
									errors={errors}
									name="email"
									render={({ message }) => <ErrorMessageStyle>{message}</ErrorMessageStyle>}
								/>
							</fieldset>

							<NewsletterButton type="submit" variant="primary" disabled={!isDirty}>
								{isSubmitting ? 'Enviando..' : 'Eu quero!'}
							</NewsletterButton>
						</NewsletterFormStyle>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default NewsletterForm;

import React from 'react';
import { motion } from 'framer-motion';
import {
	ContactContainer,
	MainContainer,
	InfoSection,
	FlexIconText,
	StyledFaPhoneAlt as PhoneIcon,
	StyledFiMail as MailIcon,
	StyledGoLocation as LocIcon,
	FlexSocialText,
	StyledFaFacebook as FbIcon,
	StyledFaInstagram as IgIcon,
	FormSection,
	StyledFooter,
} from './styles';

const contactVariant = {
	hidden: {},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {},
};

const firstTextVariant = {
	hidden: {
		opacity: 0,
		x: '-30px',
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 0.7,
		},
	},
	exit: {
		opacity: 0,
		x: '-30px',
		transition: {
			duration: 0.7,
		},
	},
};

const middleIconsVariant = {
	hidden: {
		opacity: 0,
		x: '-30px',
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 0.7,
			delay: 0.6,
		},
	},
	exit: {
		opacity: 0,
		x: '-30px',
		transition: {
			duration: 0.9,
		},
	},
};

const bottomIconsVariant = {
	hidden: {
		opacity: 0,
		x: '-30px',
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 0.6,
			delay: 1.1,
		},
	},
	exit: {
		opacity: 0,
		x: '-30px',
		transition: {
			duration: 0.9,
		},
	},
};

const formVariant = {
	hidden: {
		opacity: 0,
		x: '30px',
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 0.6,
			delay: 1.7,
		},
	},
	exit: {
		opacity: 0,
		x: '30px',
		transition: {
			duration: 0.9,
		},
	},
};

function Contact() {
	return (
		<ContactContainer
			as={motion.div}
			variants={contactVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<MainContainer>
				<div class='same-height first'>
					<InfoSection>
						<span className='pCont'>
							<motion.p variants={firstTextVariant}>
								Aceitamos doações de equipamentos para
								pessoas com deficiência (usado ou não),
								roupas, alimentos não perecíveis ou se
								preferir doação monetária.
							</motion.p>
						</span>

						<FlexIconText
							as={motion.div}
							variants={middleIconsVariant}
						>
							<PhoneIcon />
							<span>
								(41) 98455-2333 / (41) 98523-4110.
							</span>
						</FlexIconText>

						<FlexIconText
							as={motion.div}
							variants={middleIconsVariant}
						>
							<MailIcon />
							<span>
								institutoglaciadasilvacdb@gmail.com
							</span>
						</FlexIconText>

						<FlexIconText
							as={motion.div}
							variants={middleIconsVariant}
						>
							<LocIcon />
							<span>
								Rua Santo Antônio, 580 - São Roque
								Campo Magro PR
							</span>
						</FlexIconText>

						<FlexSocialText
							as={motion.div}
							variants={bottomIconsVariant}
						>
							<a
								href='https://www.facebook.com/institutoglaciadasilva'
								target='_blank'
								rel='noreferrer'
							>
								<FlexIconText>
									<FbIcon />
									<span>
										facebook.com/institutoglaciadasilva
									</span>
								</FlexIconText>
							</a>
							<a
								href='https://www.instagram.com/institutoglaciadasilva'
								target='_blank'
								rel='noreferrer'
							>
								<FlexIconText
									as={motion.div}
									variants={bottomIconsVariant}
								>
									<IgIcon />
									<span>
										instagram.com/institutoglaciadasilva
									</span>
								</FlexIconText>
							</a>
						</FlexSocialText>
					</InfoSection>
				</div>

				<div class='same-height second'>
					<FormSection
						as={motion.div}
						variants={formVariant}
					>
						<h1>Nos envie uma mensagem!</h1>
						<form
							action='https://formspree.io/f/xwkwdlqd'
							method='POST'
							id='form-main'
							onSubmit={() => {}}
						>
							<label>
								Nome
								<input
									type='text'
									name='name'
									required
									placeholder='Glacia da Silva'
								/>
							</label>
							<label>
								Email
								<input
									type='email'
									name='email'
									required
									placeholder='glaciadasilva@gmail.com'
								/>
							</label>

							<label>
								Mensagem
								<textarea
									rows='5'
									name='mensagem'
									required
									placeholder='Nos envie uma mensagem, uma dúvida, uma sugestão, uma história!'
								></textarea>
							</label>
							<input type='submit' value='Enviar' />
						</form>
					</FormSection>
				</div>
				<StyledFooter>
					Site feito e cedido por @JaenScarlo
				</StyledFooter>
			</MainContainer>
		</ContactContainer>
	);
}

export default Contact;

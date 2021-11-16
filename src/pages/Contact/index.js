import React, { useRef } from 'react';
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

function Contact() {
	return (
		<ContactContainer>
			<MainContainer>
				<div class='same-height first'>
					<InfoSection>
						<span className='pCont'>
							<p>
								Aceitamos doações de equipamentos para
								pessoas com deficiência (usado ou não),
								roupas, alimentos não perecíveis ou se
								preferir doação monetária.
							</p>
						</span>

						<FlexIconText>
							<PhoneIcon />
							<span>
								(41) 98455-2333 / (41) 98523-4110.
							</span>
						</FlexIconText>

						<FlexIconText>
							<MailIcon />
							<span>
								institutoglaciadasilvacdb@gmail.com
							</span>
						</FlexIconText>

						<FlexIconText>
							<LocIcon />
							<span>
								Rua Santo Antônio, 580 - São Roque
								Campo Magro PR
							</span>
						</FlexIconText>

						<FlexSocialText>
							<FlexIconText>
								<FbIcon />
								<span>
									facebook.com/institutoglaciadasilva
								</span>
							</FlexIconText>

							<FlexIconText>
								<IgIcon />
								<span>
									instagram.com/institutoglaciadasilva
								</span>
							</FlexIconText>
						</FlexSocialText>
					</InfoSection>
				</div>

				<div class='same-height second'>
					<FormSection>
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

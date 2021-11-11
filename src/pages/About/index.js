import React from 'react';
import { motion } from 'framer-motion';
import {
	AboutContainer,
	StyledSection as Section,
	StyledTextsDiv as TxtDiv,
	StyledHeader as Header,
	StyledP,
	StyledImgContainer,
	StyledImg,
} from './styles';
import FirstPic from '../../assets/dona-glacia.jpg';
import SecondPic from '../../assets/paulo.jpg';
import ThirdPic from '../../assets/barracao-cdb.jpg';

function About() {
	return (
		<AboutContainer as={motion.div}>
			<Section>
				<TxtDiv>
					<Header>Origem</Header>
					<StyledP>
						<span>
							"Continue ajudando as pessoas e cuide bem
							de nossa família", foi o último pedido da
							<strong> Sr. Glacia da Silva</strong>, ao
							seu filho Paulo da Silva.
						</span>
						<span className='space-below'>
							Dona Glaucia sempre teve em si um
							espírito filantrópico, que a levava a
							estender a mão ao próximo.
						</span>
						<span>
							Fazia o bem, sem olhar a quem. Essa é a
							origem primordial da instituição que
							agora leva o nome desse grande ser humano
							que foi a Dona Glaucia.
						</span>
					</StyledP>
				</TxtDiv>
				<StyledImgContainer>
					<StyledImg src={FirstPic} imgPos={'first'} />
				</StyledImgContainer>
			</Section>

			<div className='wavy-bg-first'>
				<Section
					reverse={true}
					className='top-padding'
				>
					<TxtDiv>
						<Header>Mentor</Header>
						<StyledP>
							<span>
								Ao visitar um parente, Sr. Paulo viu
								uma cadeira de rodas quebrada em sua
								casa, a comprou e após conserta-lá
								começou a emprestar para quem
								precisava.
							</span>
							<span>
								Logo foi atrás de mais, em usinas de
								reciclagem, de amigos e conhecidos,
								etc.
							</span>
							<span>
								A quantidade de aparelhos cresceu ao
								ponto de faltar espaço em casa.
							</span>
							<span>
								Com o apoio de amigos e família a
								instituição foi criada, um barracão foi
								alugado, e o projeto oficializado!
							</span>
						</StyledP>
					</TxtDiv>
					<StyledImgContainer>
						<StyledImg
							src={SecondPic}
							imgPos={'second'}
						/>
					</StyledImgContainer>
				</Section>
			</div>

			<div className='wavy-bg-second'>
				<Section className='top-padding'>
					<TxtDiv>
						<Header>Futuro</Header>
						<StyledP>
							<span className='space-below'>
								Além de fornecer os produtos
								hospitalares para quem precisa, o
								instituto doa cestas básicas e roupas
								para pessoas que realizam trabalhos de
								caridade e cuidam dos próximos.
							</span>
							<span className='space-below'>
								O objetivo, de uma forma resumida, é
								ajudar quanto mais pessoas possíveis.
							</span>
							<span>
								Engajar nessa Corrente do Bem & Fazer o
								bem, sem olhar a quem!
							</span>
						</StyledP>
					</TxtDiv>
					<StyledImgContainer>
						<StyledImg
							src={ThirdPic}
							imgPos={'third'}
						/>
					</StyledImgContainer>
				</Section>
			</div>
		</AboutContainer>
	);
}

export default About;

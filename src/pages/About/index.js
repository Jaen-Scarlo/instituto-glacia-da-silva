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

const aboutVariant = {
	hidden: {},
	visible: {},
	exit: {},
};
const headerVariantLeft = {
	hidden: { opacity: 0, x: '-30px' },
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			delay: 0.5,
			duration: 1.7,
			type: 'spring',
			ease: 'easeIn',
		},
	},
	exit: {
		opacity: 0,
		x: '-30px',
		transition: {
			duration: 0.4,
		},
	},
};
const headerVariantRight = {
	hidden: { opacity: 0, x: '30px' },
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			delay: 0.5,
			duration: 1.7,
			type: 'spring',
			ease: 'easeIn',
		},
	},
	exit: {
		opacity: 0,
		x: '30px',
		transition: {
			duration: 0.4,
		},
	},
};
const paragraphVariantLeft = {
	hidden: {
		opacity: 0,
		x: '-30px',
	},
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			delay: 0.7,
			duration: 1.4,
			type: 'spring',
			ease: 'easeIn',
		},
	},
	exit: {
		opacity: 0,
		x: '-30px',
		transition: {
			delay: 0.1,
			duration: 0.4,
		},
	},
};
const paragraphVariantRight = {
	hidden: {
		opacity: 0,
		x: '30px',
	},
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			delay: 0.7,
			duration: 1.4,
			type: 'spring',
			ease: 'easeIn',
		},
	},
	exit: {
		opacity: 0,
		x: '30px',
		transition: {
			delay: 0.1,
			duration: 0.4,
		},
	},
};
const imageVariantLeft = {
	hidden: { opacity: 0, x: '30px' },
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			delay: 0.9,
			duration: 1.4,
			type: 'spring',
			ease: 'easeIn',
		},
	},
	exit: {
		opacity: 0,
		x: '30px',
		transition: {
			delay: 0.3,
			duration: 0.4,
		},
	},
};
const imageVariantRight = {
	hidden: { opacity: 0, x: '-30px' },
	visible: {
		opacity: 1,
		x: '0',
		transition: {
			delay: 0.9,
			duration: 1.4,
			type: 'spring',
			ease: 'easeIn',
		},
	},
	exit: {
		opacity: 0,
		x: '-30px',
		transition: {
			delay: 0.3,
			duration: 0.4,
		},
	},
};

function About() {
	return (
		<AboutContainer
			key='sobre'
			as={motion.div}
			variants={aboutVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<Section>
				<TxtDiv>
					<Header
						as={motion.div}
						variants={headerVariantLeft}
					>
						Origem
					</Header>
					<StyledP
						as={motion.div}
						variants={paragraphVariantLeft}
					>
						<span>
							"Continue ajudando as pessoas e cuide bem
							de nossa fam??lia", foi o ??ltimo pedido da
							<strong> Sr. Glacia da Silva</strong>, ao
							seu filho Paulo da Silva.
						</span>
						<span className='space-below'>
							Dona Glacia sempre teve em si um esp??rito
							filantr??pico, que a levava a estender a
							m??o ao pr??ximo.
						</span>
						<span>
							Fazia o bem, sem olhar a quem. Essa ?? a
							origem primordial da institui????o que
							agora leva o nome desse grande ser humano
							que foi a Dona Glacia.
						</span>
					</StyledP>
				</TxtDiv>
				<StyledImgContainer
					as={motion.div}
					variants={imageVariantLeft}
					tabIndex='6'
				>
					<StyledImg
						src={FirstPic}
						imgPos={'first'}
						alt='Imagem da Sr. Glacia da Silva com sua fam??lia'
					/>
				</StyledImgContainer>
			</Section>

			<div className='wavy-bg-first'>
				<Section
					reverse={true}
					className='top-padding'
				>
					<TxtDiv>
						<Header
							as={motion.div}
							variants={headerVariantRight}
						>
							Mentor
						</Header>
						<StyledP
							as={motion.div}
							variants={paragraphVariantRight}
						>
							<span>
								Ao visitar um parente, Sr. Paulo viu
								uma cadeira de rodas quebrada em sua
								casa, a comprou e ap??s conserta-l??
								come??ou a emprestar para quem
								precisava.
							</span>
							<span>
								Logo foi atr??s de mais, em usinas de
								reciclagem, de amigos e conhecidos,
								etc.
							</span>
							<span>
								A quantidade de aparelhos cresceu ao
								ponto de faltar espa??o em casa.
							</span>
							<span>
								Com o apoio de amigos e fam??lia a
								institui????o foi criada, um barrac??o foi
								alugado, e o projeto oficializado!
							</span>
						</StyledP>
					</TxtDiv>
					<StyledImgContainer
						as={motion.div}
						variants={imageVariantRight}
						tabIndex='7'
					>
						<StyledImg
							src={SecondPic}
							imgPos={'second'}
							alt='Imagem do mentor do instituto, Sr. Paulo'
						/>
					</StyledImgContainer>
				</Section>
			</div>

			<div className='wavy-bg-second'>
				<Section className='top-padding'>
					<TxtDiv>
						<Header
							as={motion.div}
							variants={headerVariantLeft}
						>
							Futuro
						</Header>
						<StyledP
							as={motion.div}
							variants={paragraphVariantLeft}
						>
							<span className='space-below'>
								Al??m de fornecer os produtos
								hospitalares para quem precisa, o
								instituto doa cestas b??sicas e roupas
								para pessoas que realizam trabalhos de
								caridade e cuidam dos pr??ximos.
							</span>
							<span className='space-below'>
								O objetivo, de uma forma resumida, ??
								ajudar quanto mais pessoas poss??veis.
							</span>
							<span>
								Engajar nessa Corrente do Bem & Fazer o
								bem, sem olhar a quem!
							</span>
						</StyledP>
					</TxtDiv>
					<StyledImgContainer
						as={motion.div}
						variants={imageVariantLeft}
						tabIndex='8'
					>
						<StyledImg
							src={ThirdPic}
							imgPos={'third'}
							alt='Imagem do barrac??o do Instituto Glacia da Silva'
						/>
					</StyledImgContainer>
				</Section>
			</div>
		</AboutContainer>
	);
}

export default About;

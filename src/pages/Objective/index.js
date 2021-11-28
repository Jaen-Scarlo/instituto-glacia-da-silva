import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
	ObjectiveContainer,
	StyledParagraph,
	StyledSlider,
	StyledReturn,
	StyledForward,
	StyledImgContainer,
	StyledImg,
} from './styles';

import Slider1 from '../../assets/slider_1.jpg';
import Slider2 from '../../assets/slider_2.jpg';
import Slider3 from '../../assets/slider_3.jpg';

const imgAndSub = [
	{
		img: Slider1,
		desc: 'Nossa amiga Ana Carolina, uma das pessoas ao qual doamos uma cadeira de rodas.',
		alt: 'Sr.Paulo com uma das pessoas que o Instituto ajudou, Ana Carolina que está em uma cadeira de rodas',
	},
	{
		img: Slider2,
		desc: 'Cadeiras receptadas, algumas vieram com algum defeito, no instituto é realizado o concerto e em seguida o redirecionamento.',
		alt: 'Imagem de várias cadeiras consertadas, há entre elas cadeiras de banho e de rodas',
	},
	{
		img: Slider3,
		desc: 'É realizado no instituto além da doação do aparelhato, a doação de alimentos e bazares a preços acessíveis.',
		alt: 'Sr.Paulo com duas pessoas a frente de alimentos que são doados pelo Instituto',
	},
];

const objectiveVariant = {
	hidden: {},
	visible: {},
	exit: {},
};
const textRightVariant = {
	hidden: {
		opacity: 0,
		x: '-30px',
		transition: {
			duration: 1,
		},
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 1,
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
const textLeftVariant = {
	hidden: {
		opacity: 0,
		x: '30px',
		transition: {
			duration: 1,
		},
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		x: '30px',
		transition: {
			duration: 0.4,
			delay: 0.2,
		},
	},
};
const sliderVariant = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

function Objective() {
	const [[currentSlide, direction], setCurrent] =
		useState([0, null]);

	const sliderVariants = {
		hidden: {
			x: direction === 'right' ? '100px' : '-100px',
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				ease: 'easeOut',
				duration: 0.7,
			},
		},
		exit: {
			x: direction === 'right' ? '100px' : '-100px',
			opacity: 0,
		},
	};

	return (
		<ObjectiveContainer
			key='objetivo'
			as={motion.div}
			variants={objectiveVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<div id='cont'>
				<StyledParagraph
					as={motion.div}
					variants={textRightVariant}
				>
					O objetivo principal da instituição é a
					captação e doação de aparelhato hospitalar
					para auxiliar pessoas com deficiência. Também
					é realizado a captação/doação de alimentos e
					roupas para famílias com necessidade.
				</StyledParagraph>

				<StyledSlider
					as={motion.div}
					variants={sliderVariant}
				>
					<StyledReturn
						tabIndex='6'
						onClick={() => {
							currentSlide !== 0
								? setCurrent([
										currentSlide - 1,
										'left',
								  ])
								: setCurrent([
										imgAndSub.length - 1,
										'left',
								  ]);
						}}
					/>
					{imgAndSub.map((item, index) => {
						if (index === currentSlide) {
							return (
								<StyledImgContainer
									as={motion.div}
									key={index}
									variants={sliderVariants}
									style={{ rotate: -3 }}
									initial='hidden'
									animate='visible'
									tabIndex='7'
									whileHover={{
										rotate: 0,
										transition: {
											ease: 'easeOut',
											duration: 0.2,
										},
									}}
								>
									<StyledImg
										src={item.img}
										alt={item.alt}
									/>
									<p>{item.desc}</p>
								</StyledImgContainer>
							);
						}
						return null;
					})}
					<StyledForward
						tabIndex='8'
						onClick={() => {
							currentSlide !== imgAndSub.length - 1
								? setCurrent([
										currentSlide + 1,
										'right',
								  ])
								: setCurrent([0, 'right']);
						}}
					/>
				</StyledSlider>

				<StyledParagraph
					position={'bottom'}
					as={motion.div}
					variants={textLeftVariant}
				>
					Os aparelhos não precisam ser novos, e alguns
					são reparados se necessário antes de serem
					encaminhados adiante para quem precisa. As
					doações monetárias são usadas para a
					manutenção da instituição que não possui um
					fim monetário.
				</StyledParagraph>
			</div>
		</ObjectiveContainer>
	);
}

export default Objective;

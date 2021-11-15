import React, { useState } from 'react';
import {
	motion,
	AnimatePresence,
} from 'framer-motion';

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
		desc: 'Nossa amiga Fulana Siclana da Silva, uma das pessoas ao qual doamos uma cadeira de rodas.',
	},
	{
		img: Slider2,
		desc: 'Cadeiras receptadas, algumas vieram com algum defeito, no instituto é feito o concerto e em seguida o redirecionamento',
	},
	{
		img: Slider3,
		desc: 'É realizado no instituto além da doação do aparelhato, a doação de alimentos e bazares a preços acessíveis',
	},
];

function Objective() {
	const [[currentSlide, direction], setCurrent] =
		useState([0, null]);

	const objectiveVariants = {
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
	};

	return (
		<ObjectiveContainer>
			<StyledParagraph>
				O objetivo principal da instituição é a
				captação e doação de aparelhato hospitalar para
				auxiliar pessoas com deficiência. Também é
				realizado a captação/doação de alimentos e
				roupas para famílias com necessidade.
			</StyledParagraph>

			<StyledSlider>
				{console.log(currentSlide + direction)}
				<StyledReturn
					onClick={() => {
						currentSlide !== 0
							? setCurrent([currentSlide - 1, 'left'])
							: setCurrent([
									imgAndSub.length - 1,
									'left',
							  ]);
					}}
				/>

				{imgAndSub.map((item, index) => {
					if (index === currentSlide) {
						return (
							<AnimatePresence>
								<StyledImgContainer
									key={index}
									as={motion.div}
									style={{ rotate: -3 }}
									variants={objectiveVariants}
									initial='hidden'
									animate='visible'
									whileHover={{
										rotate: 0,
										transition: {
											ease: 'easeOut',
											duration: 0.2,
										},
									}}
									exit={
										direction === 'right'
											? {
													x: '300px',
													opacity: 0,
											  }
											: ''
									}
								>
									<StyledImg src={item.img} />
									<p>{item.desc}</p>
								</StyledImgContainer>
							</AnimatePresence>
						);
					}
					return null;
				})}

				<StyledForward
					onClick={() => {
						currentSlide !== imgAndSub.length - 1
							? setCurrent([currentSlide + 1, 'right'])
							: setCurrent([0, 'right']);
					}}
				/>
			</StyledSlider>

			<StyledParagraph position={'bottom'}>
				Os aparelhos não precisam ser novos, e alguns
				são reparados se necessário antes de serem
				encaminhados adiante para quem precisa. As
				doações monetárias são usadas para a manutenção
				da instituição que não possui um fim monetário.
			</StyledParagraph>
		</ObjectiveContainer>
	);
}

export default Objective;

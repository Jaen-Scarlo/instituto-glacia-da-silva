import React from 'react';
import { motion } from 'framer-motion';

import { NavLink as Link } from 'react-router-dom';

import MainPic from '../../assets/corrente-do-bem.jpg';
import {
	HomeContainer,
	MainImg,
	TextAndCta,
	CtaBtn,
} from './styles.js';

const homeVariant = {
	hidden: {
		opacity: 0,
		backgroundColor: '#aec6e4',
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
		},
	},
};

function Home() {
	return (
		<HomeContainer
			as={motion.div}
			key='homeContainer'
			variants={homeVariant}
			initial='hidden'
			animate='visible'
			exit={{ opacity: 0 }}
		>
			<div id='flex'>
				<MainImg src={MainPic} as={motion.img} />
				<TextAndCta>
					<span class='headers'>
						<h1>Instituto Glacia da Silva</h1>
						<h1>Corrente do Bem</h1>
					</span>
					<p>
						<span>Instituição de captação,</span>
						<span> recuperação e doação de</span>
						<span> aparelhato médico para </span>
						pessoas em necessidade!
					</p>
					<CtaBtn
						as={motion.button}
						whileHover={{
							scale: 1.1,
						}}
					>
						<Link to='/sobre'>Conheça o projeto!</Link>
					</CtaBtn>
				</TextAndCta>
			</div>
		</HomeContainer>
	);
}

export default Home;

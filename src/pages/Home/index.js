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

function Home() {
	return (
		<HomeContainer
			as={motion.div}
			key='homeContainer'
			exit={{ opacity: 0 }}
		>
			<div id='flex'>
				<MainImg src={MainPic} />
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

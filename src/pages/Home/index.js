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
	hidden: {},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
		},
	},
	exit: {},
};

const imageVariant = {
	hidden: {
		opacity: 0,
		x: '-30px',
		backgroundColor: '#aec6e4',
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 0.9,
		},
	},
	exit: {
		x: '-30px',
		opacity: 0,
		transition: {
			duration: 0.9,
		},
	},
};

const headerVariant = {
	hidden: {
		opacity: 0,
		y: '-30px',
	},
	visible: {
		opacity: 1,
		y: '0px',
		transition: {
			duration: 1,
			delay: 0.6,
			ease: 'easeOut',
			type: 'spring',
		},
	},
	exit: {
		opacity: 0,
		y: '-30px',
	},
};

const subheaderVariant = {
	hidden: {
		opacity: 0,
		x: '30px',
	},
	visible: {
		opacity: 1,
		x: '0px',
		transition: {
			duration: 0.9,
			delay: 0.8,
		},
	},
	exit: {
		opacity: 0,
		x: '30px',
	},
};

const buttonVariant = {
	hidden: {
		opacity: 0,
		y: '30px',
	},
	visible: {
		opacity: 1,
		y: '0px',
		transition: {
			duration: 0.9,
			delay: 1,
		},
	},
	exit: {
		opacity: 0,
		y: '30px',
	},
};
function Home() {
	return (
		<HomeContainer
			as={motion.div}
			variants={homeVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<div id='flex'>
				<MainImg
					src={MainPic}
					as={motion.img}
					variants={imageVariant}
				/>
				<TextAndCta>
					<motion.span
						class='headers'
						variants={headerVariant}
					>
						<h1>Instituto Glacia da Silva</h1>
						<h1>Corrente do Bem</h1>
					</motion.span>
					<motion.p variants={subheaderVariant}>
						<span>Instituição de captação,</span>
						<span> recuperação e doação de</span>
						<span> aparelhato médico para </span>
						pessoas em necessidade!
					</motion.p>
					<CtaBtn
						as={motion.button}
						variants={buttonVariant}
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

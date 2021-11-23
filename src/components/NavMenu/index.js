import React from 'react';

import {
	Overlay,
	StyledClose,
	StyledWrapper,
	StyledLink as Link,
} from './styles.js';
import { motion } from 'framer-motion';

const overlayVariant = {
	hidden: { backgroundColor: '#95b9e7' },
	visible: {
		backgroundColor: '#95b9e7',
		transition: {
			staggerChildren: 0.4,
		},
	},
	exit: {
		backgroundColor: '#95b9e7',
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const itemVariant = {
	hidden: { x: '-30px', opacity: 0 },
	visible: {
		x: '0px',
		opacity: 1,
	},
	exit: { x: '-30px', opacity: 0 },
};

function NavMenu({ active, setActive }) {
	const changeState = () => setActive(!active);

	return (
		<Overlay
			as={motion.div}
			key='overlay'
			variants={overlayVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<StyledClose
				exit={{ opacity: 0 }}
				onClick={() => changeState()}
			/>
			<StyledWrapper>
				<Link
					as={motion(Link)}
					variants={itemVariant}
					activeClassName='active-link-menu'
					exact={true}
					to='/'
					onClick={() => changeState()}
				>
					INICIO
				</Link>
				<Link
					as={motion(Link)}
					variants={itemVariant}
					activeClassName='active-link-menu'
					exact={true}
					to='/sobre'
					onClick={() => changeState()}
				>
					SOBRE
				</Link>
				<Link
					as={motion(Link)}
					variants={itemVariant}
					activeClassName='active-link-menu'
					exact={true}
					to='/objetivo'
					onClick={() => changeState()}
				>
					OBJETIVO
				</Link>
				<Link
					as={motion(Link)}
					variants={itemVariant}
					activeClassName='active-link-menu'
					exact={true}
					to='/contato'
					onClick={() => changeState()}
				>
					CONTATO
				</Link>
			</StyledWrapper>
		</Overlay>
	);
}

export default NavMenu;

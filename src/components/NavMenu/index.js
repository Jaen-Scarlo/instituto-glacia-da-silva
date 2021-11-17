import React from 'react';

import {
	Overlay,
	StyledClose,
	StyledWrapper,
	StyledLink as Link,
} from './styles.js';
import './NavMenu.css';
import { motion } from 'framer-motion';

const overlayVariant = {
	hidden: { opacity: 0.5, backgroundColor: '#95b9e7' },
	visible: {
		opacity: 1,
		backgroundColor: '#95b9e7',
		transition: {
			duration: 0.5,
		},
	},
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
			exit='hidden'
		>
			<StyledClose
				exit={{ opacity: 0 }}
				onClick={() => changeState()}
			/>
			<StyledWrapper>
				<Link
					exact={true}
					to='/'
					onClick={() => changeState()}
				>
					INICIO
				</Link>
				<Link
					exact={true}
					to='/sobre'
					activeClassName='is-active'
					onClick={() => changeState()}
				>
					SOBRE
				</Link>
				<Link
					exact={true}
					to='/objetivo'
					activeClassName='is-active'
					onClick={() => changeState()}
				>
					OBJETIVO
				</Link>
				<Link
					exact={true}
					activeClassName='is-active'
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

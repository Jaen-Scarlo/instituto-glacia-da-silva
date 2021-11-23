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
			duration: 0.5,
		},
	},
	exit: {},
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
					activeClassName='active-link-menu'
					exact={true}
					to='/'
					onClick={() => changeState()}
				>
					INICIO
				</Link>
				<Link
					activeClassName='active-link-menu'
					exact={true}
					to='/sobre'
					onClick={() => changeState()}
				>
					SOBRE
				</Link>
				<Link
					activeClassName='active-link-menu'
					exact={true}
					to='/objetivo'
					onClick={() => changeState()}
				>
					OBJETIVO
				</Link>
				<Link
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

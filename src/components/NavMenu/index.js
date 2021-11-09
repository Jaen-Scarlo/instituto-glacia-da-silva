import React from 'react';
import {
	Overlay,
	StyledClose,
	StyledWrapper,
	StyledLink as Link,
} from './styles.js';
import { motion } from 'framer-motion';

const overlayVariants = {
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
			variants={overlayVariants}
			initial='hidden'
			animate='visible'
			exit={{
				opacity: 0,
				transition: {
					duration: 0.5,
				},
			}}
		>
			<StyledClose
				exit={{ opacity: 0 }}
				onClick={() => changeState()}
			/>
			<StyledWrapper>
				<Link to='/' onClick={() => changeState()}>
					INICIO
				</Link>
				<Link
					to='/sobre'
					onClick={() => changeState()}
				>
					SOBRE
				</Link>
				<Link
					to='/objetivo'
					onClick={() => changeState()}
				>
					OBJETIVO
				</Link>
				<Link
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

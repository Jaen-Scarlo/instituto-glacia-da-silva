import React from 'react';
import logoImg from '../../assets/instituto-glacia-da-silva-logo.png';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router-dom';

import {
	NavContainer as Nav,
	StyledIconWrapper as Wrapper,
	StyledIcon as Icon,
	StyledBars,
	StyledLink as Link,
	StyledLinkContainer as SLContainer,
} from './styles.js';

const navVariant = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 2.5,
		},
	},
	exit: { opacity: 0 },
};

function NavBar({ active, setActive }) {
	const location = useLocation();
	return (
		<Nav
			as={motion.nav}
			key='navBar'
			variants={navVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
			tabIndex='1'
		>
			{location.pathname !== '/' ? (
				<Link to='/' tabIndex='2'>
					<Wrapper>
						<Icon
							src={logoImg}
							alt='Logotipo do instituto Glacia da Silva, as letras G e S formam um coração, com uma corrente abaixo'
						/>
					</Wrapper>
				</Link>
			) : (
				<Wrapper>
					<Icon
						src={logoImg}
						alt='Logotipo do instituto Glacia da Silva, as letras G e S formam um coração, com uma corrente abaixo'
					/>
				</Wrapper>
			)}
			<StyledBars
				onClick={() => setActive(!active)}
				tabIndex='2'
			/>
			<SLContainer>
				<Link
					exact={true}
					to='/sobre'
					activeClassName='active-link'
					tabIndex='3'
				>
					SOBRE
				</Link>
				<Link
					exact={true}
					to='/objetivo'
					activeClassName='active-link'
					tabIndex='4'
				>
					OBJETIVO
				</Link>
				<Link
					exact={true}
					to='/contato'
					activeClassName='active-link'
					tabIndex='5'
				>
					CONTATO
				</Link>
			</SLContainer>
		</Nav>
	);
}

export default NavBar;

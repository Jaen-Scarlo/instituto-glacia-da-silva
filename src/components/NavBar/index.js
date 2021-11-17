import React from 'react';
import logoImg from '../../assets/instituto-glacia-da-silva-logo.png';
import { motion } from 'framer-motion';

import {
	NavContainer as Nav,
	StyledIconWrapper as Wrapper,
	StyledIcon as Icon,
	StyledBars,
	StyledLink as Link,
	StyledLinkContainer as SLContainer,
} from './styles.js';

function NavBar({ active, setActive }) {
	return (
		<Nav
			as={motion.div}
			key='nav'
			exit={{ opacity: 0 }}
		>
			<Link to='/'>
				<Wrapper>
					<Icon src={logoImg} />
				</Wrapper>
			</Link>
			<StyledBars onClick={() => setActive(!active)} />
			<SLContainer>
				<Link
					to='/sobre'
					activeClassName='active-link'
				>
					SOBRE
				</Link>
				<Link
					to='/objetivo'
					activeClassName='active-link'
				>
					OBJETIVO
				</Link>
				<Link
					to='/contato'
					activeClassName='active-link'
				>
					CONTATO
				</Link>
			</SLContainer>
		</Nav>
	);
}

export default NavBar;

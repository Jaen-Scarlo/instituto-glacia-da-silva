import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const NavContainer = styled.nav`
	position: absolute;
	top: 0;
	width: 100%;
	background-color: #95b9e7;
	opacity: 0.95;
	padding: 0.7em 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;

	@media (max-width: 700px) {
		padding: 1.7em 2em;
		height: 50px;
	}
`;
export const StyledIconWrapper = styled.div`
	display: flex;
`;

export const StyledIcon = styled.img`
	height: 55px;
	width: 100%;
	z-index: 200;
	margin: 0;
	padding: 0;

	@media (max-width: 700px) {
		height: 40px;
	}
`;

export const StyledBars = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 700px) {
		display: flex;
		font-size: 2rem;
		cursor: pointer;
	}
`;

export const StyledLinkContainer = styled.div`
	@media screen and (max-width: 700px) {
		display: none;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 1.5em;

	&:visited {
		color: #fff;
	}

	:not(:last-child) {
		padding-right: 1.3em;
	}
`;

export const StyledOverlay = styled.div``;

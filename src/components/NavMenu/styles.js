import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const Overlay = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

export const StyledClose = styled(FaTimes)`
	align-self: flex-end;
	cursor: pointer;
	font-size: 4rem;
	margin: 0.3em 0.15em;
	color: white;
	display: flex;
	cursor: pointer;
	&:hover {
		transform: scale(1.3);
		transition-duration: 0.3s;
	}
`;

export const StyledWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	font-size: 3.5em;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 2em;
`;

export const StyledLink = styled(Link)`
	cursor: pointer;
	width: 100%;
	text-align: center;
	text-decoration: none;
	margin: 0;
	padding: 0.25em 0em;
	background: #89aad5;
	color: white;
	&:visited {
		color: white;
	}

	&:hover {
		transition: 0.5s;
		background: white;
		color: black;
	}
`;

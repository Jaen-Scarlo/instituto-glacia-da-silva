import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

export const ObjectiveContainer = styled.div`
	padding-top: 5em;
	background-color: #aec6e4;
	min-height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;
export const StyledParagraph = styled.p`
	font-size: 1.6em;
	line-height: 1.3;
	max-width: 60%;
	margin: 0 auto;
`;

export const StyledSlider = styled.div`
	max-width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledReturn = styled(FaAngleLeft)`
	font-size: 3em;
	color: white;
`;

export const StyledForward = styled(FaAngleRight)`
	font-size: 3em;
	color: white;
`;

export const StyledImgContainer = styled.div`
	padding: 1em 0.7em 4em 0.7em;
	background: white;
	width: 350px;
	height: 400px;
	overflow: hidden;
	transform: rotateX(40deg);
`;

export const StyledImg = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

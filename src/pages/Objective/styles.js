import styled from 'styled-components';
import Wave from '../../assets/wave_about.png';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

export const ObjectiveContainer = styled.div`
	padding-top: 6em;
	min-height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
	background: url(${Wave});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: #95b9e7;
`;
export const StyledParagraph = styled.p`
	color: white;
	font-size: 1.5em;
	line-height: 1.3;
	max-width: 60%;
	margin: 0 auto;

	margin-bottom: ${({ position }) =>
		position === 'bottom' ? '2em' : '0em'};

	@media (max-width: 700px) {
		max-width: 80%;
		font-size: 1.4em;
	}
`;

export const StyledSlider = styled.div`
	max-width: 80%;
	margin: 3em auto;
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

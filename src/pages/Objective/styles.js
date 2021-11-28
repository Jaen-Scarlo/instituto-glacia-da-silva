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
	display: flex;
	#cont {
		margin-bottom: 2em;
	}
`;
export const StyledParagraph = styled.p`
	color: white;
	font-size: 1.3em;
	line-height: 1.3;
	max-width: 60%;
	margin: 0 auto;

	@media (min-width: 1500px) {
		font-size: 2.3em;
	}
	@media (max-width: 700px) {
		max-width: 80%;
		font-size: 1.4em;
	}
`;

export const StyledSlider = styled.div`
	max-width: 80%;
	margin: 2em auto;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1500px) {
		max-width: 100%;
	}
`;

export const StyledReturn = styled(FaAngleLeft)`
	font-size: 3em;
	color: white;
	cursor: pointer;
	&:focus {
		border: 3px solid white;
	}
`;

export const StyledForward = styled(FaAngleRight)`
	font-size: 3em;
	color: white;
	cursor: pointer;
	&:focus {
		border: 3px solid white;
	}
`;

export const StyledImgContainer = styled.div`
	padding: 1em 0.7em 4.5em 0.7em;
	background: white;
	width: 350px;
	height: 400px;
	overflow: hidden;
	transform: rotateX(40deg);
	&:focus {
		border: 3px solid white;
	}
	@media (min-width: 1500px) {
		width: 500px;
	}
`;

export const StyledImg = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

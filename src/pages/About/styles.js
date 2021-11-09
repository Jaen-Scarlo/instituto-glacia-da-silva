import styled from 'styled-components';
import WaveSvgUp from '../../assets/waves-upper.svg';
import WaveSvgBot from '../../assets/waves-bottom.svg';

export const AboutContainer = styled.div`
	padding-top: 2em;
	background-color: #aec6e4;
	position: absolute;
	min-height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;

	.wavy-bg-first {
		z-index: 1;
		background-image: url(${WaveSvgUp});
		background-color: #3675c6;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
	}
	.wavy-bg-second {
		z-index: 1;
		background-image: url(${WaveSvgBot});
		position: relative;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
	}
`;

export const StyledSection = styled.div`
	border: 5px solid black;
	max-width: 80%;
	height: 600px;
	margin: 0 auto;
	justify-content: space-evenly;
	align-items: center;
	display: flex;
	flex-direction: ${({ reverse }) =>
		reverse ? 'row-reverse' : 'row'}; ;
`;
export const StyledTextsDiv = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 420px;
	min-height: 90%;
`;
export const StyledHeader = styled.h1`
	font-size: 2.7em;
	justify-self: flex-start;
`;
export const StyledP = styled.p`
	font-size: 1.5em;
	font-weight: 300;

	span {
		display: block;
		padding-bottom: 0.1em;
		&.space-below {
			padding-bottom: 1em;
		}
	}
`;

export const StyledImgContainer = styled.div`
	width: 40%;
	max-height: 70%;
	overflow: hidden;
	border: 5px solid red;
`;
export const StyledImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

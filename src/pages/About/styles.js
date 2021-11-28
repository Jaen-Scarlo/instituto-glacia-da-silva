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
	overflow-x: hidden;
	&:focus {
		border-bottom: 5px solid #1f77d0;
	}
	.top-padding {
		padding-top: 3em;
	}
	@media (max-width: 1000px) {
		padding-top: 3.5em;
	}
	@media (max-width: 700px) {
		overflow-x: visible;
		.top-padding {
			padding-top: 5em;
		}
	}

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
	max-width: 80%;
	height: 550px;
	margin: 0 auto;
	justify-content: space-evenly;
	align-items: center;
	display: flex;
	flex-direction: ${({ reverse }) =>
		reverse ? 'row-reverse' : 'row'};

	@media (max-width: 1000px) {
		max-width: 95%;
		justify-content: space-between;
	}
	@media (max-width: 700px) {
		max-width: 100%;
		flex-direction: column;
		padding-bottom: 3em;
		height: max-content;
	}
`;
export const StyledTextsDiv = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	max-width: 420px;

	@media (max-width: 1000px) {
		width: 380px;
	}
	@media (max-width: 700px) {
		padding: 1em;
		min-width: 95%;
	}
`;
export const StyledHeader = styled.h1`
	font-size: 2.7em;
	justify-self: flex-start;
	margin-bottom: 0.5em;
`;
export const StyledP = styled.p`
	font-size: 1.5em;
	font-weight: 300;

	@media (max-width: 1000px) {
		font-size: 1.4em;
	}
	@media (max-width: 700px) {
		font-size: 1.35em;
	}
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
	border-radius: 5px;
	display: flex;
	overflow: hidden;
	box-shadow: 5px 5px 4px 0px #95b9e7;

	&:focus {
		border-bottom: 5px solid #1f77d0;
	}

	@media (max-width: 700px) {
		box-shadow: 0px 5px 4px 0px #95b9e7;
		min-width: 100%;
		margin: 1em 0em;
	}
`;
export const StyledImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: ${({ imgPos }) =>
		imgPos === 'second'
			? '0 -200px'
			: imgPos === 'third'
			? '0px -100px'
			: '50% 50%'};
	&:focus {
		border-bottom: 5px solid #1f77d0;
	}
	@media (max-width: 1200px) {
		object-position: 50% 50%;
	}

	@media (max-width: 1000px) {
		min-width: 100%;
		object-position: 50% 50%;
	}
	@media (max-width: 700px) {
		height: 250px;
		width: 100vw;

		object-position: ${({ imgPos }) =>
			imgPos === 'first' ? '50% 20%' : '50% '};
	}
`;

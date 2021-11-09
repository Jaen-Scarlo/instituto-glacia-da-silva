import styled from 'styled-components';
import WaveSvg from '../../assets/wave-haikei.svg';

export const HomeContainer = styled.div`
	min-height: 100%;
	max-height: fit-content;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${WaveSvg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	#flex {
		max-height: 80%;
		margin: 2em auto 0em auto;
		display: flex;
	}

	@media (max-width: 920px) {
		#flex {
			width: 90%;
		}
	}

	@media (max-width: 660px) {
		#flex {
			padding-top: 2.5em;
			flex-direction: column;
		}
	}
`;

export const MainImg = styled.img`
	height: 500px;
	width: 400px;
	z-index: 0;
	object-fit: cover;
	box-shadow: -7px 5px 14px rgba(0, 0, 0, 0.25);

	@media (max-width: 920px) {
		width: 350px;
	}
	@media (max-width: 780px) {
		width: 310px;
	}
	@media (max-width: 660px) {
		height: 400px;
		width: 90%;
		margin: 0 auto;
	}
`;

export const TextAndCta = styled.div`
	height: auto;
	width: 100%;
	color: #fff;
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	z-index: 1;

	.headers {
		width: fit-content;
		margin-right: 0;
		align-self: flex-end;
		margin-left: -70px;
	}
	h1 {
		max-width: 100%;
		font-weight: bold;
		font-size: 3em;
		max-width: 100%;
	}
	p {
		font-size: 1.7em;
		letter-spacing: 0.3px;
	}
	p span {
		display: block;
	}

	@media (max-width: 920px) {
		.headers h1 {
			font-size: 2.3em;
		}
		p {
			font-size: 1.5em;
		}
	}

	@media (max-width: 780px) {
		.headers h1 {
			font-size: 1.9em;
		}
		p {
			font-size: 1.4em;
		}
	}

	@media (max-width: 660px) {
		text-align: left;
		width: 90%;
		margin: 0em auto;
		margin: 1em auto 1.5em auto;

		.headers {
			width: 100%;
			margin-left: 0;
			align-self: flex-start;
			line-height: 1.1;
			padding: 0.7em 0em;
		}
		p {
			line-height: 1.15;
		}
		p span {
			display: inline;
		}
	}
`;

export const CtaBtn = styled.button`
	padding: 1em 2.4em;
	margin: 1em 0em 1.5em auto;
	background-color: white;
	border: none;
	border-radius: 40px;
	box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
	width: fit-content;
	a {
		display: block;
		font-size: 1.6em;
		color: #3675c6;
		text-decoration: none;

		&:visited {
			color: #3675c6;
		}
	}

	@media (max-width: 780px) {
		padding: 0.8em 2em;
	}

	@media (max-width: 660px) {
		margin: 1.8em auto 0em 0em;
	}
`;

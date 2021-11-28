import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const ContactContainer = styled.div`
	min-height: 100vh;
`;
export const MainContainer = styled.div`
	min-height: 100%;
	display: flex;

	.same-height {
		width: 50%;
		display: flex;
		align-items: flex-start;
		padding-top: 5.2em;
	}
	.first {
		background-color: #aec6e4;
		@media (max-width: 900px) {
			padding-top: 4.5em;
		}
		@media (max-width: 700px) {
			padding-top: 3.5em;
		}
	}
	.second {
		background: white;
		@media (max-width: 400px) {
			padding-top: 0em;
		}
		@media (max-width: 900px) {
			padding-top: 0.5em;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
		.same-height {
			width: 100%;
		}
	}
`;
export const InfoSection = styled.div`
	max-height: 80%;
	width: 100%;
	padding: 1em;
	color: white;

	a {
		color: white;
		text-decoration: none;
		display: block;
		&:focus {
			border: 5px solid #1f77d0;
		}
		&:hover {
			color: #1f77d0;
		}
		&:visited {
			color: white;
		}
	}

	@media (max-width: 900px) {
		height: 100%;
		.pCont {
			display: block;
			width: 90%;
			margin: 0 auto;
		}
	}
	p {
		font-size: 1.6em;
		max-width: 80%;
		margin: 0 auto 2.3em auto;

		@media (min-width: 1500px) {
			max-width: 90%;
			font-size: 1.8em;
		}
		@media (max-width: 1000px) {
			max-width: 90%;
			font-size: 1.4em;
		}
		@media (max-width: 900px) {
			max-width: 90%;
			text-align: left;
			margin: 0 auto 2.3em 0;
		}
		@media (max-width: 400px) {
			max-width: 100%;
			font-size: 1.3em;
		}
	}
`;
export const FlexIconText = styled.div`
	margin: 0 auto;
	max-width: 80%;
	font-size: 1.3em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0.3em;
	overflow-x: hidden;

	@media (min-width: 1500px) {
		max-width: 90%;
		font-size: 1.8em;
	}
	@media (max-width: 1000px) {
		max-width: 90%;
		font-size: 1.2em;
	}

	span {
		padding-left: 0.5em;
	}
`;
export const StyledFaPhoneAlt = styled(FaPhoneAlt)`
	font-size: 1.8em;
	min-width: 37px;
`;
export const StyledFiMail = styled(FiMail)`
	font-size: 1.8em;
	min-width: 37px;
`;
export const StyledGoLocation = styled(GoLocation)`
	font-size: 1.8em;
	min-width: 37px;
`;
export const FlexSocialText = styled.div`
	margin-top: 5em;
	min-width: 37px;

	a {
		color: white;
		text-decoration: none;
		&:visited {
			color: white;
		}

		&:hover {
			color: #1f77d0;
		}
	}

	@media (max-width: 900px) {
		margin-top: 3em;
	}
`;
export const StyledFaFacebook = styled(FaFacebook)`
	font-size: 1.8em;
	min-width: 37px;
`;
export const StyledFaInstagram = styled(FaInstagram)`
	font-size: 1.8em;
	min-width: 37px;
`;
export const FormSection = styled.div`
	max-height: 80%;
	width: 100%;
	padding: 1em;
	@media (max-width: 900px) {
		height: 100%;
	}
	h1 {
		margin: 0 auto;
		max-width: 80%;
		font-weight: 400;
		font-size: 1.8em;
		text-align: left;
		@media (min-width: 1500px) {
			max-width: 90%;
			font-size: 2em;
		}
		@media (max-width: 1000px) {
			font-size: 1.6em;
			max-width: 90%;
		}
	}
	form {
		max-width: 80%;
		margin: 0 auto;
		color: black;
		font-size: 2em;

		@media (min-width: 1500px) {
			max-width: 90%;
			font-size: 2.2em;
		}

		@media (max-width: 1000px) {
			max-width: 90%;
		}

		label {
			width: 100%;
			display: block;
			font-weight: 400;
			&:first-child {
				margin-top: 1.5em;
			}
			&:not(:first-child) {
				margin-top: 0.5em;
			}
			@media (max-width: 1000px) {
				font-size: 0.9em;
			}
			@media (max-width: 400px) {
				font-size: 0.8em;
			}
		}
		input {
			display: block;
			padding: 0.2em 0.7em;
			width: 100%;
			border: none;
			border-radius: 100px;
			font-size: 0.7em;
			background: #95b9e7;
			color: white;
			margin-top: 0.15em;
			&[type='submit'] {
				margin: 2em auto 0 auto;
				max-width: 30%;
				cursor: pointer;
			}
		}
		textarea {
			margin-top: 0.15em;
			background: #95b9e7;
			color: white;
			width: 100%;
			border: none;
			border-radius: 20px;
			resize: none;
			padding: 0.5em 0.7em;
			overflow-x: hidden;
			font-size: 0.7em;
		}
	}
`;
export const StyledFooter = styled.footer`
	bottom: 0;
	left: 0;
	width: 100%;
	height: fit-content;
	background-color: #95b9e7;
	text-align: center;
	padding: 0.3em;
	color: white;
	a {
		color: white;
		text-decoration: none;
		&:visited {
			color: white;
		}
		&:hover {
			color: #1f77d0;
		}
	}

	@media (max-width: 900px) {
		position: relative;
		bottom: 0;
	}
`;

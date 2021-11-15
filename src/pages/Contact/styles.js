import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const ContactContainer = styled.div`
	height: 100vh;
`;
export const MainContainer = styled.div`
	height: 100%;
	display: flex;
`;
export const InfoSection = styled.div`
	height: 100%;
	padding: 6em 1em 1em 1em;
	background-color: #aec6e4;
	color: white;
	width: 50%;
	p {
		font-size: 1.6em;
		max-width: 80%;
		margin: 0 auto 2.3em auto;
		@media (max-width: 1000px) {
			max-width: 90%;
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

	@media (max-width: 1000px) {
		max-width: 90%;
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
	width: 50%;
	height: 100%;
	padding: 6em 1em 1em 1em;

	h1 {
		margin: 0 auto;
		max-width: 80%;
		font-weight: 400;
	}
	form {
		max-width: 80%;
		margin: 0 auto;
		color: black;
		font-size: 2em;
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
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: fit-content;
	background-color: #95b9e7;
	text-align: center;
	padding: 0.3em;
	color: white;
`;

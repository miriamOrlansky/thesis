import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {colors} from "../styles/colors";
export const Root = styled.div`
background-color: ${props => props.backColor};

`;
export const Nav = styled.nav`
display: flex;
font-size: 0.8rem;
z-index: 12;
font-family: "garamond-premier-pro-display", serif;
font-weight: 600;
font-style: normal;
justify-content: center;
height: 85px;
	@media (min-width: 426px){
	justify-content: flex-end;
	padding: 0.3rem calc((100vw - 90vw) / 2);
	font-size: 1.3rem;
	}

`;

export const NavLink = styled(Link)`
color: ${props => props.TheColor};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.3rem;
padding-bottom: 10px;
height: 100%;
cursor: pointer;
&.active {
	text-decoration: underline;
	text-underline-offset: 10px;
	text-decoration-thickness: 3px;
	text-decoration-color: ${props => props.TheColor};
}
@media (min-width: 426px){
	padding: 0 2 rem;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;



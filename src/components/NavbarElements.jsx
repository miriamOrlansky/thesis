import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {colors} from "../styles/colors";

export const Nav = styled.nav`
height: 85px;
display: flex;
justify-content: flex-end;
padding: 0.3rem calc((100vw - 90vw) / 2);
z-index: 12;
font-family: "garamond-premier-pro-display", serif;
font-weight: 600;
font-style: normal;
font-size: 1.3rem;
`;

export const NavLink = styled(Link)`
color: ${colors.black};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&.active {
	text-decoration: underline;
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

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

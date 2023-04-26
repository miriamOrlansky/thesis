import styled from "styled-components";
import {colors} from "../styles/colors";

export const Root=styled.div`
font-size: 1.1rem;;
padding: 0.3rem calc((100vw - 90vw) / 2);
display: flex;
flex-direction: column; 
gap: 10px;
max-width: 750px;
margin: 0 auto;
padding-bottom: 100px;
font-weight: 500;
`;
export const Header = styled.div`
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center;
gap: 4px;
font-size: 0.8rem;

`;
export const HeaderLine = styled.div`
display: flex;
justify-content: center;
`;
export const Group = styled.div`
`;
export const Title = styled.div`
font-weight: 700;
font-size: 1.3rem;
`;
export const SubTitle = styled.div`
font-weight: 600; 
font-size: 1.1rem;
`;

export const Paragraph = styled.div`
display: flex;
flex-direction: column; 
`;